import { Block } from '@components/ui/layouts/block/block.index'
import { Header } from '@components/ui/patterns/header/header.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { Plural, useLingui } from '@lingui/react/macro'
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
      <Typography>
        <Plural
          _0='You have no unread messages'
          few="There're # messages in your inbox"
          one="There's # message in your inbox"
          other="There're # messages in your inbox"
          value={2}
        />
      </Typography>
    </Block>
  )
}

const Root = createContainer(LinguiComponent, 'Lingui')

export default function ExampleLingui(): React.JSX.Element {
  return <Root />
}
