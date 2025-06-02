import { Text } from 'react-native'

import { createContainer } from '../create-container'

const TagComponent = (): React.JSX.Element => {
  return <Text>Tag view</Text>
}

const Root = createContainer(TagComponent, 'Tag')

export default function ExampleTag(): React.JSX.Element {
  return <Root />
}
