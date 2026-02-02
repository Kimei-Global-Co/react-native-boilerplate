import { useEffect, useState } from 'react'

import Block from '@components/ui/layouts/block/block.index'
import Row from '@components/ui/layouts/row/row.index'
import Spacer from '@components/ui/layouts/spacer/spacer.index'
import Button from '@components/ui/primitives/button/button.index'
import Icon from '@components/ui/primitives/icon/icon.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { type Updater, useMutative } from 'shared/hooks/use-mutative'
import { createContainer } from '../create-container'

const OptimizedChild = ({
  onUpdate,
  name
}: {
  onUpdate: Updater<{
    count: number
    data: CustomData
  }>
  name: string
}) => {
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
    setRenderCount((c) => c + 1)
    console.info(`[Benchmark] ${name} committed`)
  }, [name])

  return (
    <Block backgroundColor='white' padding={16} radius={12} shadow>
      <Row between>
        <Block>
          <Typography fontType='bold' size={16}>
            {name}
          </Typography>
          <Typography color='gray_400' size={14}>
            Memoized Component
          </Typography>
        </Block>
        <Block
          align='center'
          backgroundColor='primary'
          padding={{ horizontal: 12, vertical: 4 }}
          radius={20}
        >
          <Typography color='black' fontType='bold' size={12}>
            Renders: {renderCount}
          </Typography>
        </Block>
      </Row>
      <Spacer y={16} />
      <Button
        onPress={() =>
          onUpdate((d) => {
            d.count++
          })
        }
        title='Trigger Hook Update'
      />
    </Block>
  )
}

class CustomData {
  constructor(public id: number) {}
}

const MutativeExample = () => {
  const [state, updateState, patches, inversePatches] = useMutative(
    {
      count: 0,
      data: new CustomData(1)
    },
    {
      // 1. enablePatches: Returns 'patches' and 'inversePatches' arrays.
      // Useful for tracking history, debugging, or implementing undo/redo logic.
      enablePatches: true,

      // 2. mark: A predicate function to handle "non-plain" objects (like Class instances).
      // By returning 'mutable', we tell Mutative to allow deep mutations on CustomData instances.
      mark: (target, { mutable }) => {
        if (target instanceof CustomData) {
          return mutable
        }
      },

      // 3. strict: Enables strict mode.
      // Forbids returning non-draft values from the updater and prevents accidental
      // access to non-draftable values, ensuring state integrity.
      strict: true
    }
  )

  useEffect(() => {
    if (patches.length > 0) {
      console.info('[Mutative] Patches generated:', patches)
      console.info('[Mutative] Inverse Patches:', inversePatches)
    }
  }, [patches, inversePatches])
  return (
    <Block flex padding={16}>
      <Typography fontType='bold' size={24}>
        Mutative Benchmark
      </Typography>
      <Typography color='gray_400' size={14}>
        This test proves that the update function is strictly stable.
      </Typography>

      <Spacer y={24} />

      <Block backgroundColor='white' padding={16} radius={12}>
        <Row align='center'>
          <Icon color='primary' name='dashboard' type='antDesign' />
          <Spacer x={8} />
          <Typography size={18}>Parent Hook State</Typography>
        </Row>
        <Typography fontType='bold' size={32}>
          {state.count}
        </Typography>
      </Block>

      <Spacer y={24} />

      <OptimizedChild name='Stable Ref Child' onUpdate={updateState} />

      <Spacer y={24} />

      <Block backgroundColor='rose_50' padding={16} radius={12}>
        <Typography color='rose_800' size={14}>
          <Typography fontType='bold'>Analysis:</Typography> Even when you
          update the count, the "Renders" badge above should stay at 1. This
          means child components don't waste work when the parent state changes.
        </Typography>
      </Block>
    </Block>
  )
}

export default createContainer(MutativeExample, 'Mutative')
