import { Text } from 'react-native'

import { createContainer } from '../create-container'

const EmptyViewComponent = (): React.JSX.Element => {
  return <Text>Empty view</Text>
}

const Root = createContainer(EmptyViewComponent, 'EmptyView')

export default function ExampleEmptyView(): React.JSX.Element {
  return <Root />
}
