import { Text } from 'react-native'

import { createContainer } from '../create-container'

const RowComponent = (): React.JSX.Element => {
  return <Text>Row view</Text>
}

const Root = createContainer(RowComponent, 'Row')

export default function ExampleRow(): React.JSX.Element {
  return <Root />
}
