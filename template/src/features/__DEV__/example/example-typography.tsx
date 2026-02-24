import { Block } from '@components/ui/layouts/block/block.index'
import { Header } from '@components/ui/patterns/header/header.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { useLingui } from '@lingui/react/macro'
import { createContainer } from '../create-container'

const TypographyComponent = (): React.JSX.Element => {
  const { t } = useLingui()
  return (
    <Block>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Typography Component</Header.Title>
        </Header.Section>
      </Header>
      <Typography>{t`Hello world!`}</Typography>
    </Block>
  )
}

const Root = createContainer(TypographyComponent, 'Typography')

export default function ExampleTypography(): React.JSX.Element {
  return <Root />
}
