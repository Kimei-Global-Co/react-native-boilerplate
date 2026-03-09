import { Platform, type TextStyle } from 'react-native'

import { getSize } from 'shared/utils/helper'

const embeddedFonts = {
  Nunito_400Regular: { android: 'Nunito_400Regular', ios: 'Nunito-Regular' },
  Nunito_500Medium: { android: 'Nunito_500Medium', ios: 'Nunito-Medium' },
  Nunito_600SemiBold: { android: 'Nunito_600SemiBold', ios: 'Nunito-SemiBold' },
  Nunito_700Bold: { android: 'Nunito_700Bold', ios: 'Nunito-Bold' },
  Nunito_900Black: { android: 'Nunito_900Black', ios: 'Nunito-Black' }
} as const

const FONT_SIZE = {
  v12: 12,
  v14: 14,
  v16: 16,
  v20: 20,
  v24: 24,
  v28: 28,
  v32: 32
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
  //#region BODY
  'font.body': {
    fontFamily: getEmbeddedFontFamily('Nunito_400Regular'),
    fontSize: getSize.m(FONT_SIZE.v14)
    // lineHeight: 20
  },
  'font.body.bold': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v14)
    // lineHeight: 20
  },
  'font.body.large': {
    fontFamily: getEmbeddedFontFamily('Nunito_400Regular'),
    fontSize: getSize.m(FONT_SIZE.v16)
    // lineHeight: 24
  },
  'font.body.large.bold': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v16)
    // lineHeight: 24
  },
  'font.body.large.medium': {
    fontFamily: getEmbeddedFontFamily('Nunito_500Medium'),
    fontSize: getSize.m(FONT_SIZE.v16)
    // lineHeight: 24
  },
  'font.body.medium': {
    fontFamily: getEmbeddedFontFamily('Nunito_500Medium'),
    fontSize: getSize.m(FONT_SIZE.v14)
    // lineHeight: 20
  },
  'font.body.small': {
    fontFamily: getEmbeddedFontFamily('Nunito_400Regular'),
    fontSize: getSize.m(FONT_SIZE.v12)
    // lineHeight: 16
  },
  'font.body.small.bold': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v12)
    // lineHeight: 16
  },
  'font.body.small.medium': {
    fontFamily: getEmbeddedFontFamily('Nunito_500Medium'),
    fontSize: getSize.m(FONT_SIZE.v12)
    // lineHeight: 16
  },
  //#endregion BODY

  //#region CODE
  'font.code': {
    fontFamily: getEmbeddedFontFamily('Nunito_600SemiBold'),
    fontSize: getSize.m(FONT_SIZE.v14)
    // lineHeight: 20
  },
  //#endregion CODE

  //#region HEADING
  'font.heading.large': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v24)
    // lineHeight: 28
  },
  'font.heading.medium': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v20)
    // lineHeight: 24
  },
  'font.heading.small': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v16)
    // lineHeight: 20
  },
  'font.heading.xlarge': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v28)
    // lineHeight: 32
  },
  'font.heading.xsmall': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v14)
    // lineHeight: 20
  },
  'font.heading.xxlarge': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v32)
    // lineHeight: 36
  },
  'font.heading.xxsmall': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v12)
    // lineHeight: 16
  },
  //#endregion HEADING

  //#region METRIC
  'font.metric.large': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v28)
    // lineHeight: 32
  },
  'font.metric.medium': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v24)
    // lineHeight: 28
  },
  'font.metric.small': {
    fontFamily: getEmbeddedFontFamily('Nunito_700Bold'),
    fontSize: getSize.m(FONT_SIZE.v16)
    // lineHeight: 20
  }
  //#endregion METRIC
} as const satisfies Record<string, FontTokenStyle>

export type FontTokenKey = keyof typeof fontTokens

export const getFontTokenStyle = (token: FontTokenKey): FontTokenStyle => {
  return fontTokens[token]
}
