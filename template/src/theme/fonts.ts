import { Platform, type TextStyle } from 'react-native'

const embeddedFonts = {
  Nunito_400Regular: { android: 'Nunito_400Regular', ios: 'Nunito-Regular' },
  Nunito_600SemiBold: { android: 'Nunito_600SemiBold', ios: 'Nunito-SemiBold' },
  Nunito_700Bold: { android: 'Nunito_700Bold', ios: 'Nunito-Bold' },
  Nunito_900Black: { android: 'Nunito_900Black', ios: 'Nunito-Black' }
} as const

export type EmbeddedFontKey = keyof typeof embeddedFonts

export const getEmbeddedFontFamily = (font: EmbeddedFontKey): string => {
  const { ios, android } = embeddedFonts[font]
  return Platform.select({ android, default: android, ios }) ?? android
}

type FontTokenStyle = Pick<
  TextStyle,
  'fontFamily' | 'fontSize' | 'lineHeight' | 'fontWeight'
>

/**
 * Atlassian-style typography tokens.
 * See: https://atlassian.design/foundations/typography/
 */
export const fontTokens = {
  'font.body': {
    fontFamily: getEmbeddedFontFamily('Nunito_400Regular'),
    fontSize: 14
    // lineHeight: 20
  },
  'font.body.large': {
    fontFamily: getEmbeddedFontFamily('Nunito_400Regular'),
    fontSize: 16
    // lineHeight: 24
  },
  'font.body.small': {
    fontFamily: getEmbeddedFontFamily('Nunito_400Regular'),
    fontSize: 12
    // lineHeight: 16
  },
  'font.heading.large': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: 24
    // lineHeight: 28
  },
  'font.heading.medium': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: 20
    // lineHeight: 24
  },
  'font.heading.small': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: 16
    // lineHeight: 20
  },
  'font.heading.xlarge': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: 28
    // lineHeight: 32
  },
  'font.heading.xsmall': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: 14
    // lineHeight: 20
  },
  'font.heading.xxlarge': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: 32
    // lineHeight: 36
  },
  'font.heading.xxsmall': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: 12
    // lineHeight: 16
  },
  'font.label': {
    fontFamily: getEmbeddedFontFamily('Nunito_600SemiBold'),
    fontSize: 12
    // lineHeight: 16
  },
  'font.metric.large': {
    fontFamily: getEmbeddedFontFamily('Nunito_900Black'),
    fontSize: 28
    // lineHeight: 32
  },
  'font.metric.medium': {
    fontFamily: getEmbeddedFontFamily('Nunito_900Black'),
    fontSize: 24
    // lineHeight: 28
  },
  'font.metric.small': {
    fontFamily: getEmbeddedFontFamily('Nunito_900Black'),
    fontSize: 16
    // lineHeight: 20
  }
} as const satisfies Record<string, FontTokenStyle>

export type FontTokenKey = keyof typeof fontTokens

export const getFontTokenStyle = (token: FontTokenKey): FontTokenStyle => {
  return fontTokens[token]
}
