import { Header } from '@components/ui/patterns/header/header.index'
import { Block } from '@components/ui/primitives/block/block.index'
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

export function ExampleTypography(): React.JSX.Element {
  return <Root />
}
