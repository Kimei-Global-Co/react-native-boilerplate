import { useRef } from 'react'
import { Animated, Pressable, StyleSheet } from 'react-native'

import Row from '../row'
import Spinner from '../spinner'
import { Typography } from '../typography'
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
      duration: 60,
      toValue: 1,
      useNativeDriver: true
    }).start()
    onPress?.()
  }

  const handleRelease = (): void => {
    Animated.timing(backgroundColorRef, {
      duration: 60,
      toValue: 0,
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
      onPressOut={handleRelease}
    >
      <Animated.View style={buttonStyles}>
        <Row align='center' gap={10}>
          <Typography style={textStyles}>{children || text}</Typography>
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
  bodered: {
    borderRadius: 16
  },
  disabled: {
    opacity: 0.6
  },
  shadow: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15);'
  },
  text: {
    fontWeight: '600'
  }
})
