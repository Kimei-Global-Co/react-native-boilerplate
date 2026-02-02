import TextInput from '@components/ui/primitives/input/input.index'
import { createContainer } from '../create-container'

const TextInputComponent = (): React.JSX.Element => {
  return <TextInput />
}

const Root = createContainer(TextInputComponent, 'TextInput')

export default function ExampleTextInput(): React.JSX.Element {
  return <Root />
}
