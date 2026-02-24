import { Block } from '@components/ui/layouts/block/block.index'
import { Header } from '@components/ui/patterns/header/header.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { useLingui } from '@lingui/react/macro'
import { createContainer } from '../create-container'

const LinguiComponent = (): React.JSX.Element => {
  const { t } = useLingui()
  return (
    <Block>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Lingui Component</Header.Title>
        </Header.Section>
      </Header>
      <Typography>{t`Hello world!`}</Typography>
    </Block>
  )
}

const Root = createContainer(LinguiComponent, 'Lingui')

export default function ExampleLingui(): React.JSX.Element {
  return <Root />
}
