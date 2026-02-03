import { Block } from '@components/ui/layouts/block/block.index'
import { EmptyState } from '@components/ui/patterns/empty-state'
import { Header } from '@components/ui/patterns/header/header.index'
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
          <Typography fontType='bold' margin={{ bottom: 16 }}>
            Default with Required Icon
          </Typography>
          <EmptyState
            description='Please check your connection.'
            icon={{ color: 'black', name: 'wifi', size: 50, type: 'feather' }}
            title='No Internet'
          />
        </Block>

        <Block>
          <Typography fontType='bold' margin={{ bottom: 16 }}>
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

export default function ExampleEmptyState(): React.JSX.Element {
  return <Root />
}
