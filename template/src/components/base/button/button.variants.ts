import type { TextStyle, ViewStyle } from 'react-native'

import Colors from '@theme/colors'
import Fonts from '@theme/fonts'
import type {
  ColorVariant,
  ContainerStyle,
  RadiusVariant,
  SizeVariant
} from './button.type'

export const containerColorVariants: Record<ColorVariant, ContainerStyle> = {
  bordered: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.gray_700,
    borderWidth: 1
  },
  default: {
    backgroundColor: Colors.gray_700
  },
  primary: {
    backgroundColor: Colors.primary
  },
  secondary: {
    backgroundColor: Colors.secondary
  },
  shadow: {
    backgroundColor: Colors.blue_200,
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)'
  }
}

export const containerRadiusVariants: Record<RadiusVariant, ViewStyle> = {
  lg: { borderRadius: 14 },
  md: { borderRadius: 12 },
  none: { borderRadius: 0 },
  sm: { borderRadius: 8 }
}

export const containerSizeVariants: Record<SizeVariant, ViewStyle> = {
  lg: { height: 48 },
  md: { height: 40 },
  sm: { height: 32 }
}

export const textColorVariants: Record<ColorVariant, TextStyle> = {
  bordered: { color: Colors.gray_darkest },
  default: { color: Colors.white },
  primary: { color: Colors.gray_darkest },
  secondary: { color: Colors.gray_darkest },
  shadow: { color: Colors.gray_darkest }
}

export const textSizeVariants: Record<SizeVariant, TextStyle> = {
  lg: { ...Fonts.bold },
  md: { ...Fonts.medium },
  sm: { ...Fonts.regular }
}
