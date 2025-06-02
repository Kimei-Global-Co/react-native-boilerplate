import { Text } from 'react-native'

import { createContainer } from '../create-container'

const SpinnerComponent = (): React.JSX.Element => {
  return <Text>Spinner view</Text>
}

const Root = createContainer(SpinnerComponent, 'Spinner')

export default function ExampleSpinner(): React.JSX.Element {
  return <Root />
}
