import React, { useRef } from 'react'
import { Animated, Pressable, StyleSheet } from 'react-native'

import Row from '../row'
import Spinner from '../spinner'
import { Text } from '../text'
import { getButtonColors, getSizeStyle } from './style'
import type { ButtonProps } from './type'

export const Button = ({
  children,
  text,
  variant = 'solid',
  size = 'medium',
  color = 'primary',
  disabled = false,
  loading = false,
  isIconOnly = false,
  borderWidth,
  borderColor: customBorderColor,
  borderRadius,
  style,
  textStyle,
  onPress
}: ButtonProps): React.JSX.Element => {
  const backgroundColorRef = useRef(new Animated.Value(0)).current

  const handlePress = (): void => {
    Animated.timing(backgroundColorRef, {
      toValue: 1,
      duration: 60,
      useNativeDriver: true
    }).start()
    onPress?.()
  }

  const handleRelease = (): void => {
    Animated.timing(backgroundColorRef, {
      toValue: 0,
      duration: 60,
      useNativeDriver: true
    }).start()
  }

  const {
    backgroundColor,
    textColor,
    borderColor: variantBorderColor
  } = getButtonColors(variant, color, disabled)
  const sizeStyle = getSizeStyle(size)

  const buttonStyles = [
    styles.base,
    !isIconOnly && sizeStyle,
    {
      backgroundColor,
      borderRadius,
      ...(variant === 'outline' && { borderWidth: borderWidth ?? 1 }),
      borderColor: customBorderColor ?? variantBorderColor
    },
    variant === 'bordered' && styles.bodered,
    variant === 'shadow' && styles.shadow,
    disabled && styles.disabled,
    style
  ]

  const textStyles = [
    styles.text,
    { color: textColor },
    sizeStyle.text,
    textStyle
  ]

  return (
    <Pressable
      disabled={disabled || loading}
      onPressIn={handlePress}
      onPressOut={handleRelease}>
      <Animated.View style={buttonStyles}>
        <Row align='center' gap={10}>
          <Text style={textStyles}>{children || text}</Text>
          {loading && <Spinner color='white' />}
        </Row>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3
  },
  bodered: {
    borderRadius: 16
  },
  disabled: {
    opacity: 0.6
  },
  text: {
    fontWeight: '600'
  }
})
