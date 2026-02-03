import { Typography } from '@components/ui/primitives/typography/typo.index'
import { useLingui } from '@lingui/react/macro'
import { createContainer } from '../create-container'

const LinguiComponent = (): React.JSX.Element => {
  const { t } = useLingui()
  return <Typography>{t`Hello world!`}</Typography>
}

const Root = createContainer(LinguiComponent, 'Lingui')

export default function ExampleLingui(): React.JSX.Element {
  return <Root />
}
