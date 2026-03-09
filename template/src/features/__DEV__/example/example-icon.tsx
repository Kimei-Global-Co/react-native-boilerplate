import { Header } from '@components/ui/patterns/header/header.index'
import { Block } from '@components/ui/primitives/block/block.index'
import { Icon } from '@components/ui/primitives/icon/icon.index'
import { Row } from '@components/ui/primitives/row/row.index'
import { createContainer } from '../create-container'

const IconComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Icons</Header.Title>
        </Header.Section>
      </Header>
      <Block align='center' gap={20} justify='center' margin={10}>
        <Row>
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
          <Icon name='ice-cream-outline' size={22} type='ionicons' />
        </Row>
        <Row>
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
          <Icon name='cloudy-night-outline' size={22} type='ionicons' />
        </Row>

        <Row>
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
          <Icon name='sunny-outline' size={22} type='ionicons' />
        </Row>
      </Block>
    </Block>
  )
}

const Root = createContainer(IconComponent, 'Icon')

export function ExampleIcon(): React.JSX.Element {
  return <Root />
}
