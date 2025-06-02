import { Text } from 'react-native'

import { createContainer } from '../create-container'

const AvatarComponent = (): React.JSX.Element => {
  return <Text>Avatar Component</Text>
}

const Root = createContainer(AvatarComponent, 'Avatar')

export default function ExampleAvatar(): React.JSX.Element {
  return <Root />
}
