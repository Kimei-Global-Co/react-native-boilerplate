import { TouchableOpacity } from 'react-native'

import OptionsSheet from '@components/ui/patterns/options-sheet'
import Block from '@components/ui/primitives/block/block.index'
import Header from '@components/ui/primitives/header/header.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { TrueSheet } from '@lodev09/react-native-true-sheet'
import { createContainer } from '../create-container'

const SheetComponent = (): React.JSX.Element => {
  return (
    <Block flex>
      <Header isBack title='Sheet Component' />
      <TouchableOpacity
        onPress={() => TrueSheet.present('options')}
        style={{ margin: 10 }}
      >
        <Typography>Example Sheet</Typography>
      </TouchableOpacity>
      <OptionsSheet />
    </Block>
  )
}

const Root = createContainer(SheetComponent, 'Sheet')

export default function ExampleSheet(): React.JSX.Element {
  return <Root />
}
