import { Platform, type TextStyle } from 'react-native'

type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold'

const fontMap: Record<FontWeight, { ios: string; android: string }> = {
  bold: {
    android: '',
    ios: ''
  },
  extraBold: {
    android: '',
    ios: ''
  },
  medium: {
    android: '',
    ios: ''
  },
  regular: { android: 'Nunito_400Regular', ios: 'Nunito-Regular' },
  semiBold: { android: 'Nunito_900Black', ios: 'Nunito-Black' }
}

export const getFontFamily = (weight: FontWeight): string => {
  const platform = Platform.OS === 'ios' ? 'ios' : 'android'
  return fontMap[weight][platform]
}

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

const baseFontSize = 14

export default {
  bold: {
    fontFamily: getFontFamily('bold'),
    fontSize: baseFontSize + 4
  },
  extraBold: {
    fontFamily: getFontFamily('extraBold'),
    fontSize: baseFontSize
  },
  medium: {
    fontFamily: getFontFamily('medium'),
    fontSize: baseFontSize + 2
  },
  regular: {
    fontFamily: getFontFamily('regular'),
    fontSize: baseFontSize
  },
  semiBold: {
    fontFamily: getFontFamily('semiBold'),
    fontSize: baseFontSize
  }
} as ThemeFontWeight
