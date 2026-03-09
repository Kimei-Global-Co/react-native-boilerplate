import { EmptyState } from '@components/ui/patterns/empty-state'
import { Header } from '@components/ui/patterns/header/header.index'
import { Block } from '@components/ui/primitives/block/block.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { createContainer } from '../create-container'

const EmptyStateComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Empty state</Header.Title>
        </Header.Section>
      </Header>
      <Block gap={32} margin={{ horizontal: 16 }}>
        <Block>
          <Typography fontToken='font.heading.xsmall' margin={{ bottom: 16 }}>
            Default with Required Icon
          </Typography>
          <EmptyState
            description='Please check your connection.'
            icon={{ color: 'black', name: 'wifi', size: 50, type: 'feather' }}
            title='No Internet'
          />
        </Block>

        <Block>
          <Typography fontToken='font.heading.xsmall' margin={{ bottom: 16 }}>
            With Action
          </Typography>
          <EmptyState
            action={
              <Button
                onPress={() => console.info('Retry')}
                title='Retry'
                variant={{ color: 'primary' }}
              />
            }
            description='You have no notifications right now.'
            icon={{
              color: 'gray_500',
              name: 'bell',
              size: 50,
              type: 'feather'
            }}
            title='No Notifications'
          />
        </Block>
      </Block>
    </Block>
  )
}

const Root = createContainer(EmptyStateComponent, 'EmptyState')

export function ExampleEmptyState(): React.JSX.Element {
  return <Root />
}
