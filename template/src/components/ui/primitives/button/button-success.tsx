import AntDesign from '@expo/vector-icons/AntDesign'
import Animated, { FadeInDown, FadeOutLeft } from 'react-native-reanimated'
import { useButtonContext } from './button.context'

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign)

export function ButtonSuccess(): React.JSX.Element | null {
  const { state } = useButtonContext('Button.Success')
  if (state !== 'success') {
    return null
  }
  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutLeft}>
      <AnimatedAntDesign color='green' name='check' size={24} />
    </Animated.View>
  )
}
