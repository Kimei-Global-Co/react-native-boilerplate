import { TextStyle } from 'react-native'

export const FontsFamily = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
  extraBold: 'Inter_800ExtraBold'
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
  regular: {
    fontSize: 14,
    fontFamily: FontsFamily['regular']
  },
  medium: {
    fontSize: 14,
    fontFamily: FontsFamily['medium']
  },
  semiBold: {
    fontSize: 14,
    fontFamily: FontsFamily['semiBold']
  },
  bold: {
    fontSize: 14,
    fontFamily: FontsFamily['bold']
  },
  extraBold: {
    fontSize: 14,
    fontFamily: FontsFamily['extraBold']
  }
} as ThemeFontWeight
