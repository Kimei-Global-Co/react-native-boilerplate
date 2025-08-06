import { Block, EmptyView, Header } from '@components'
import { createContainer } from '../create-container'

const EmptyViewComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header isBack title='Empty view' />
      <EmptyView
        description='There are no items to display at the moment. Please check back later or try a different search.'
        title='No Data Available'
      />
    </Block>
  )
}

const Root = createContainer(EmptyViewComponent, 'EmptyView')

export default function ExampleEmptyView(): React.JSX.Element {
  return <Root />
}
