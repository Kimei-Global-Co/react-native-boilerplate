import Block from '@components/ui/layouts/block/block.index'
import Header from '@components/ui/patterns/header/header.index'
import { createContainer } from '../create-container'

const HeaderComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header isBack title='Header component' />
      <Header />
      <Header subtitle='Online' title='John Doe' />
    </Block>
  )
}

const Root = createContainer(HeaderComponent, 'Header')

export default function ExampleHeader(): React.JSX.Element {
  return <Root />
}
