import { Text } from 'react-native'

import { createContainer } from '../create-container'

const ButtonComponent = (): React.JSX.Element => {
  return <Text>Button Component</Text>
}

const Root = createContainer(ButtonComponent, 'Button')

export default function ExampleButton(): React.JSX.Element {
  return <Root />
}
