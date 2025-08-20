import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import { useEffect } from 'react'

import { clamp, getColor, snapPoint } from '@utils/helper'
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import { StyleSheet } from 'react-native-unistyles'
import type { SwitchProps } from './type'

const DEFAULT_TRACK_WIDTH = 50
const DEFAULT_THUMB_WIDTH = 24

export default function Switch(
  props: Readonly<SwitchProps>
): React.JSX.Element {
  const {
    trackColor = { active: 'black', inActive: 'whiteEC' },
    thumbColor = 'white',
    value,
    onValueChange,
    trackWidth = DEFAULT_TRACK_WIDTH,
    thumbWidth = DEFAULT_THUMB_WIDTH,
    disabled
  } = props

  const trackThumbWidth = trackWidth - thumbWidth - 4

  const translateX = useSharedValue(0)

  useEffect(() => {
    translateX.set(
      withSpring(value ? trackThumbWidth : 0, {
        overshootClamping: true
      })
    )
  }, [trackThumbWidth, translateX, value])

  const trackBgColor = getColor(
    disabled,
    trackColor,
    'rgba(143, 155, 179, 0.16)'
  )

  const circleColor = getColor(
    disabled,
    thumbColor,
    'rgba(143, 155, 179, 0.32)'
  )

  const animSwitchContainer = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.get(),
        [0, trackThumbWidth],
        [trackBgColor.inActive, trackBgColor.active]
      )
    }
  })

  const animSwitchCircle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.get(),
        [0, trackThumbWidth],
        [circleColor.inActive, circleColor.active]
      ),
      transform: [{ translateX: translateX.get() }],
      width: interpolate(
        translateX.get(),
        [0, trackThumbWidth / 3, trackThumbWidth],
        [thumbWidth, (thumbWidth / 2) * 2.5, thumbWidth]
      )
    }
  })

  const panGesture = Gesture.Pan()
    .enabled(!disabled)
    .onUpdate((event) => {
      translateX.set(
        clamp(
          event.translationX + (value ? trackThumbWidth : 0),
          0,
          trackThumbWidth
        )
      )
    })
    .onEnd((event) => {
      const selectedSnapPoint = snapPoint(translateX.get(), event.velocityX, [
        0,
        trackThumbWidth
      ])
      translateX.set(
        withSpring(selectedSnapPoint, {
          overshootClamping: true
        })
      )
      runOnJS(onValueChange)(selectedSnapPoint !== 0)
    })

  const tapGesture = Gesture.Tap()
    .enabled(!disabled)
    .onStart(() => {
      runOnJS(onValueChange)(!value)
    })

  const composedGesture = Gesture.Exclusive(panGesture, tapGesture)

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View
        collapsable={false}
        style={[
          styles.switchContainer,
          { width: trackWidth },
          animSwitchContainer
        ]}
      >
        <Animated.View
          collapsable={false}
          style={[
            { borderRadius: thumbWidth, height: thumbWidth, width: thumbWidth },
            animSwitchCircle
          ]}
        />
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create((theme) => ({
  switchContainer: {
    borderRadius: 36.5,
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xs
  }
}))
