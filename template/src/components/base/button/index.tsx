import { JSX, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'

import RNTouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce'

import Row from '../row'
import Spinner from '../spinner'
import { Text } from '../text'
import { getButtonColors, getSizeStyle } from './style'
import { ButtonProps } from './type'

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
}: ButtonProps): JSX.Element => {
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
      borderWidth: borderWidth ?? (variant === 'bordered' ? 1 : 0),
      borderColor: customBorderColor ?? variantBorderColor
    },
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
    <RNTouchableBounce
      disabled={disabled || loading}
      onPressIn={handlePress}
      onPressOut={handleRelease}>
      <Animated.View style={buttonStyles}>
        <Row align='center' gap={10}>
          <Text style={textStyles}>{children || text}</Text>
          {loading && <Spinner color='white' />}
        </Row>
      </Animated.View>
    </RNTouchableBounce>
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
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  disabled: {
    opacity: 0.6
  },
  text: {
    fontWeight: '600'
  }
})
