import type { ButtonPresetColors, ButtonSize, ButtonVariant } from './type'

const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF3B30'
}

export const getButtonColors = (
  variant: ButtonVariant,
  color: string,
  _disabled: boolean
): { backgroundColor: string; textColor: string; borderColor: string } => {
  const baseColor =
    color in COLORS ? COLORS[color as ButtonPresetColors] : color

  const variants = {
    bordered: {
      backgroundColor: baseColor,
      borderColor: 'transparent',
      textColor: '#FFFFFF'
    },
    ghost: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textColor: baseColor
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: baseColor,
      textColor: baseColor
    },
    shadow: {
      backgroundColor: baseColor,
      borderColor: 'transparent',
      textColor: '#FFFFFF'
    },
    solid: {
      backgroundColor: baseColor,
      borderColor: 'transparent',
      textColor: '#FFFFFF'
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
    large: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      text: { fontSize: 18 }
    },
    medium: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      text: { fontSize: 16 }
    },
    small: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      text: { fontSize: 14 }
    }
  }

  return sizes[size]
}
