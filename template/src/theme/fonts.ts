import { type TextStyle } from 'react-native'

export const FontsFamily = {
  bold: 'Inter_700Bold',
  extraBold: 'Inter_800ExtraBold',
  medium: 'Inter_500Medium',
  regular: 'Inter_400Regular',
  semiBold: 'Inter_600SemiBold'
} as const

export interface ThemeFontWeight {
  regular: FontBase
  medium: FontBase
  bold: FontBase
  semiBold: FontBase
  extraBold: FontBase
}

export type FontBase = {
  fontSize?: TextStyle['fontSize']
  fontFamily: TextStyle['fontFamily']
  fontWeight: TextStyle['fontWeight']
}

export default {
  bold: {
    fontFamily: FontsFamily['bold'],
    fontSize: 14
  },
  extraBold: {
    fontFamily: FontsFamily['extraBold'],
    fontSize: 14
  },
  medium: {
    fontFamily: FontsFamily['medium'],
    fontSize: 14
  },
  regular: {
    fontFamily: FontsFamily['regular'],
    fontSize: 14
  },
  semiBold: {
    fontFamily: FontsFamily['semiBold'],
    fontSize: 14
  }
} as ThemeFontWeight
