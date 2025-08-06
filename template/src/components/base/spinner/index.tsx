import { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'

import Colors from '@theme/colors'
import { Block } from '../block'

interface Props {
  color: keyof typeof Colors
  durationMs?: number
  size?: number | 'small' | 'medium' | 'large'
}

const SPINNER_SIZES = {
  large: 32,
  medium: 24,
  small: 16
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
      duration: durationMs,
      easing: Easing.linear,
      toValue: 360,
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
  const actualColor = color in Colors ? Colors[color] : color

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree)
  }, [durationMs, rotationDegree])

  return (
    <Block
      accessibilityRole='progressbar'
      style={[styles.container, { height: spinnerSize, width: spinnerSize }]}
    >
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
            borderRadius: spinnerSize / 2,
            borderTopColor: actualColor,
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
  background: {
    height: '100%',
    opacity: 0.25,
    width: '100%'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  progress: {
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    height: '100%',
    position: 'absolute',
    width: '100%'
  }
})

export default Spinner
