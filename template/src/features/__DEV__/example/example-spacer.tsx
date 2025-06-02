import { Text } from 'react-native'

import { createContainer } from '../create-container'

const SpacerComponent = (): React.JSX.Element => {
  return <Text>Spacer view</Text>
}

const Root = createContainer(SpacerComponent, 'Spacer')

export default function ExampleSpacer(): React.JSX.Element {
  return <Root />
}
