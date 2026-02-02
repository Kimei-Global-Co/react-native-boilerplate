import Block from '@components/ui/layouts/block/block.index'
import { ErrorState } from '@components/ui/patterns/error-state/index'
import Header from '@components/ui/patterns/header/header.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { createContainer } from '../create-container'

const ErrorStateComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header>
        <Header.Left>
          <Header.BackButton />
        </Header.Left>
        <Header.Content>
          <Header.Title>Error State</Header.Title>
        </Header.Content>
      </Header>
      <Block gap={32} margin={{ horizontal: 16 }}>
        <Block>
          <Typography fontType='bold' margin={{ bottom: 16 }}>
            Default Error
          </Typography>
          <ErrorState
            message='Something went wrong. Please try again.'
            onRetry={() => console.info('Retry default')}
            title='Error Occurred'
          />
        </Block>

        <Block>
          <Typography fontType='bold' margin={{ bottom: 16 }}>
            Custom Retry Text
          </Typography>
          <ErrorState
            message='Unable to fetch data.'
            onRetry={() => console.info('Reloading...')}
            retryText='Reload Page'
            title='Fetch Failed'
          />
        </Block>

        <Block>
          <Typography fontType='bold' margin={{ bottom: 16 }}>
            No Retry Action
          </Typography>
          <ErrorState
            message='This is a permanent error. You cannot retry.'
            title='Fatal Error'
          />
        </Block>
      </Block>
    </Block>
  )
}

const Root = createContainer(ErrorStateComponent, 'ErrorState')

export default function ExampleErrorState(): React.JSX.Element {
  return <Root />
}
