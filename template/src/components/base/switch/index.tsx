import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import { useEffect } from 'react'

import Colors from '@theme/colors'
import { typeGuards } from '@utils/helper'
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

const clamp = (value: number, lowerBound: number, upperBound: number) => {
  'worklet'
  return Math.min(Math.max(lowerBound, value), upperBound)
}

const snapPoint = (
  value: number,
  velocity: number,
  points: ReadonlyArray<number>
): number => {
  'worklet'
  const point = value + 0.2 * velocity
  const deltas = points.map((p) => Math.abs(point - p))
  const minDelta = Math.min.apply(null, deltas)
  return points.filter((p) => Math.abs(point - p) === minDelta)[0]
}

const DEFAULT_TRACK_WIDTH = 50
const DEFAULT_THUMB_WIDTH = 24

export default function Switch(props: SwitchProps): React.JSX.Element {
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

  const trackBgColor = disabled
    ? {
        active: 'rgba(143, 155, 179, 0.16)',
        inActive: 'rgba(143, 155, 179, 0.16)'
      }
    : typeGuards(trackColor, 'string')
      ? {
          active: Colors[trackColor] ?? trackColor,
          inActive: Colors[trackColor] ?? trackColor
        }
      : {
          active: Colors[trackColor.active] ?? trackColor.active,
          inActive: Colors[trackColor.inActive] ?? trackColor.inActive
        }

  const circleColor = disabled
    ? {
        active: 'rgba(143, 155, 179, 0.32)',
        inActive: 'rgba(143, 155, 179, 0.32)'
      }
    : typeGuards(thumbColor, 'string')
      ? {
          active: Colors[thumbColor] ?? thumbColor,
          inActive: Colors[thumbColor] ?? thumbColor
        }
      : {
          active: Colors[thumbColor.active] ?? thumbColor.active,
          inActive: Colors[thumbColor.inActive] ?? thumbColor.inActive
        }

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
