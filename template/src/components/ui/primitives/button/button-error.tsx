import AntDesign from '@expo/vector-icons/AntDesign'
import Animated, { FadeInDown, FadeOutLeft } from 'react-native-reanimated'
import { useButtonContext } from './button.context'

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign)

export function ButtonError(): React.JSX.Element | null {
  const { state } = useButtonContext('Button.Error')
  if (state !== 'error') {
    return null
  }
  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutLeft}>
      <AnimatedAntDesign color='red' name='close' size={24} />
    </Animated.View>
  )
}
