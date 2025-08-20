import { useEffect } from 'react'

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'
import { getSpinnerSize, type SpinnerProps, SpinnerView } from './spinner-view'

export default function Spinner({
  size,
  duration = 1000,
  ...rest
}: Readonly<SpinnerProps>) {
  const transition = useSharedValue(0)

  useEffect(() => {
    transition.set(
      withRepeat(
        withTiming(360, { duration, easing: Easing.linear }),
        -1,
        false
      )
    )
  }, [duration, transition])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: transition.get() + 'deg' }]
    }
  }, [])

  return (
    <Animated.View
      role='progressbar'
      style={[
        {
          height: getSpinnerSize(size),
          width: getSpinnerSize(size)
        },
        animatedStyle
      ]}
    >
      <SpinnerView size={size} {...rest} />
    </Animated.View>
  )
}
