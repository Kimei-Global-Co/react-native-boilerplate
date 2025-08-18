import Block from '@components/base/block'
import EmptyView from '@components/base/empty-view'
import Header from '@components/base/header'
import { createContainer } from '../create-container'

const CameraComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header isBack title='Camera' />
      <EmptyView
        description='There are no items to display at the moment. Please check back later or try a different search.'
        title='No Data Available'
      />
    </Block>
  )
}

const Root = createContainer(CameraComponent, 'Camera')

export default function ExampleCamera(): React.JSX.Element {
  return <Root />
}
