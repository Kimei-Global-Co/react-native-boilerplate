import { Block } from '@components/ui/layouts/block/block.index'
import { EmptyState } from '@components/ui/patterns/empty-state'
import { Header } from '@components/ui/patterns/header/header.index'
import { createContainer } from '../create-container'

const CameraComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Camera</Header.Title>
        </Header.Section>
      </Header>
      <EmptyState
        description='There are no items to display at the moment. Please check back later or try a different search.'
        icon={{ name: 'camera', size: 50, type: 'feather' }}
        title='No Data Available'
      />
    </Block>
  )
}

const Root = createContainer(CameraComponent, 'Camera')

export default function ExampleCamera(): React.JSX.Element {
  return <Root />
}
