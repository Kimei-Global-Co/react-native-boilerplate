import { Text } from 'react-native'

import { createContainer } from '../create-container'

const ListComponent = (): React.JSX.Element => {
  return <Text>List Component</Text>
}

const Root = createContainer(ListComponent, 'List')

export default function ExampleList(): React.JSX.Element {
  return <Root />
}
