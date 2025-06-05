import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'

import Colors from '@theme/colors'

import { Block } from '../block'

interface Props {
  color: keyof typeof Colors
  durationMs?: number
  size?: number | 'small' | 'medium' | 'large'
}

const SPINNER_SIZES = {
  small: 16,
  medium: 24,
  large: 32
} as const

const getSpinnerSize = (size: Props['size']): number => {
  if (typeof size === 'number') return size
  if (!size) return SPINNER_SIZES.medium
  return SPINNER_SIZES[size]
}

const startRotationAnimation = (
  durationMs: number,
  rotationDegree: Animated.Value
): void => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true
    })
  ).start()
}

const Spinner = ({
  color,
  durationMs = 1000,
  size = 'small'
}: Props): React.JSX.Element => {
  const rotationDegree = useRef(new Animated.Value(0)).current
  const spinnerSize = getSpinnerSize(size)
  const borderWidth = Math.max(Math.floor(spinnerSize / 6), 2)
  const actualColor =
    color in Colors ? Colors[color] : color

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree)
  }, [durationMs, rotationDegree])

  return (
    <Block
      accessibilityRole='progressbar'
      style={[styles.container, { width: spinnerSize, height: spinnerSize }]}>
      <Block
        style={[
          styles.background,
          {
            borderColor: actualColor,
            borderRadius: spinnerSize / 2,
            borderWidth
          }
        ]}
      />
      <Animated.View
        style={[
          styles.progress,
          {
            borderTopColor: actualColor,
            borderRadius: spinnerSize / 2,
            borderWidth
          },
          {
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg']
                })
              }
            ]
          }
        ]}
      />
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    opacity: 0.25
  },
  progress: {
    width: '100%',
    height: '100%',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute'
  }
})

export default Spinner
