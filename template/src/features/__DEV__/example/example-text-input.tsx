import { Block } from '@components/ui/primitives/block/block.index'
import {
  Input,
  InputField,
  InputIcon
} from '@components/ui/primitives/input/input.index'
import { Row } from '@components/ui/primitives/row/row.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { createContainer } from '../create-container'

const TextInputComponent = (): React.JSX.Element => {
  return (
    <Block gap={20} padding={16}>
      <Typography>Standalone Primitives</Typography>

      <Block gap={10}>
        <Input placeholder='Simple standalone input...' />
        <Input clearable={true} placeholder='Clearable input...' />
        <Input leftIcon='search' placeholder='Search...' />
        <Input
          error={true}
          leftIcon='alert-circle'
          placeholder='Error state (border only)...'
        />
        <Input
          focusColor='rose_500'
          leftIcon='heart'
          placeholder='Custom focus color...'
        />
      </Block>

      <Typography margin={{ top: 20 }}>Advanced Composition</Typography>

      <Input>
        <Row backgroundColor='gray_100' padding={8} radius={8}>
          <InputField placeholder='Custom composition...' />
          <InputIcon position='right'>send</InputIcon>
        </Row>
      </Input>

      <Typography margin={{ top: 20 }}>Compound API Components</Typography>
      <Input>
        <Block
          border={{ color: 'blue_100', width: 2 }}
          padding={{ horizontal: 12 }}
          radius={12}
          size={{ height: 80 }}
        >
          <InputField
            placeholder='Directly using InputField...'
            style={{ fontSize: 18 }}
          />
        </Block>
      </Input>
    </Block>
  )
}

const Root = createContainer(TextInputComponent, 'TextInput')

export function ExampleTextInput(): React.JSX.Element {
  return <Root />
}
