import { ButtonPresetColors, ButtonSize, ButtonVariant } from './type'

const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  danger: '#FF3B30'
}

export const getButtonColors = (
  variant: ButtonVariant,
  color: string,
  _disabled: boolean
): { backgroundColor: string; textColor: string; borderColor: string } => {
  const baseColor =
    color in COLORS ? COLORS[color as ButtonPresetColors] : color

  const variants = {
    solid: {
      backgroundColor: baseColor,
      textColor: '#FFFFFF',
      borderColor: 'transparent'
    },
    bordered: {
      backgroundColor: 'transparent',
      textColor: baseColor,
      borderColor: baseColor
    },
    shadow: {
      backgroundColor: baseColor,
      textColor: '#FFFFFF',
      borderColor: 'transparent'
    },
    ghost: {
      backgroundColor: '#FFFFFF',
      textColor: baseColor,
      borderColor: 'transparent'
    }
  }

  return variants[variant]
}

export const getSizeStyle = (
  size: ButtonSize
): {
  paddingVertical: number
  paddingHorizontal: number
  text: { fontSize: number }
} => {
  const sizes = {
    small: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      text: { fontSize: 14 }
    },
    medium: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      text: { fontSize: 16 }
    },
    large: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      text: { fontSize: 18 }
    }
  }

  return sizes[size]
}
