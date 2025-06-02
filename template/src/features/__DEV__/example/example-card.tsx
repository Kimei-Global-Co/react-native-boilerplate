import { Text } from 'react-native'

import { createContainer } from '../create-container'

const CardComponent = (): React.JSX.Element => {
  return <Text>Card Component</Text>
}

const Root = createContainer(CardComponent, 'Card')

export default function ExampleCard(): React.JSX.Element {
  return <Root />
}
