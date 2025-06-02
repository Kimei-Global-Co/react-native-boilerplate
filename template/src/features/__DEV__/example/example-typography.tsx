import { Platform, Text } from 'react-native'

import { useLingui } from '@lingui/react/macro'

import { createContainer } from '../create-container'

const TypographyComponent = (): React.JSX.Element => {
  const { t } = useLingui()
  return (
    <Text
      style={{
        fontFamily: Platform.select({
          android: 'Nunito_400Regular',
          ios: 'Nunito-Regular'
        })
      }}>
      {t`Hello world!`}
    </Text>
  )
}

const Root = createContainer(TypographyComponent, 'Typography')

export default function ExampleTypography(): React.JSX.Element {
  return <Root />
}
