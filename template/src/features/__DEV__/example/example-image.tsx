import { Text } from 'react-native'

import { createContainer } from '../create-container'

const ImageComponent = (): React.JSX.Element => {
  return <Text>Image view</Text>
}

const Root = createContainer(ImageComponent, 'Image')

export default function ExampleImage(): React.JSX.Element {
  return <Root />
}
