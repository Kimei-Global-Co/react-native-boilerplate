import { Text } from 'react-native'

import { useLingui } from '@lingui/react/macro'

import { createContainer } from '../create-container'

const LinguiComponent = (): React.JSX.Element => {
  const { t } = useLingui()
  return <Text>{t`Hello world!`}</Text>
}

const Root = createContainer(LinguiComponent, 'Lingui')

export default function ExampleLingui(): React.JSX.Element {
  return <Root />
}
