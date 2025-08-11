import Block from '@components/base/block'
import Header from '@components/base/header'
import Icon from '@components/base/icon'
import { createContainer } from '../create-container'

const IconComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header isBack title='Icons' />
      <Block align='center' gap={20} justify='center' margin={10}>
        <Block row>
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
          <Icon name={'ice-cream-outline'} size={22} type='ionicons' />
        </Block>
        <Block row>
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
          <Icon name={'cloudy-night-outline'} size={22} type='ionicons' />
        </Block>

        <Block row>
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
          <Icon name={'sunny-outline'} size={22} type='ionicons' />
        </Block>
      </Block>
    </Block>
  )
}

const Root = createContainer(IconComponent, 'Icon')

export default function ExampleIcon(): React.JSX.Element {
  return <Root />
}
