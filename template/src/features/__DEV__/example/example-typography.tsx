import { Platform } from 'react-native'

import { Typography } from '@components/base/typography'
import { useLingui } from '@lingui/react/macro'
import { createContainer } from '../create-container'

const TypographyComponent = (): React.JSX.Element => {
  const { t } = useLingui()
  return (
    <Typography
      style={{
        fontFamily: Platform.select({
          android: 'Nunito_400Regular',
          ios: 'Nunito-Regular'
        })
      }}
    >
      {t`Hello world!`}
    </Typography>
  )
}

const Root = createContainer(TypographyComponent, 'Typography')

export default function ExampleTypography(): React.JSX.Element {
  return <Root />
}
