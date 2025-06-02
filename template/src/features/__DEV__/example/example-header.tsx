import { Text } from 'react-native'

import { createContainer } from '../create-container'

const HeaderComponent = (): React.JSX.Element => {
  return <Text>Header view</Text>
}

const Root = createContainer(HeaderComponent, 'Header')

export default function ExampleHeader(): React.JSX.Element {
  return <Root />
}
