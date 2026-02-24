import { StyleSheet, type TextStyle } from 'react-native'

import Colors from '@theme/colors'
import { getEmbeddedFontFamily, getFontTokenStyle } from '@theme/fonts'
import { NativeText } from 'react-native/Libraries/Text/TextNativeComponent'
import {
  createDefaultStyle,
  handleGutter,
  typeGuards
} from 'shared/utils/helper'
import type { CommonTextProps } from './typo.type'

const createTypoStyles = (props: CommonTextProps): TextStyle => {
  const {
    style,
    fontToken,
    fontFamily,
    color = 'black',
    lineHeight,
    backgroundColor,
    padding,
    margin,
    center,
    justify,
    right
  } = props

  const baseFontStyle = getFontTokenStyle(fontToken ?? 'font.body')

  return StyleSheet.flatten<TextStyle>([
    createDefaultStyle(props),
    backgroundColor && {
      backgroundColor: Colors[backgroundColor]
    },
    { ...baseFontStyle },
    fontFamily && { fontFamily: getEmbeddedFontFamily(fontFamily) },
    { color: Colors[color] ?? color },
    typeGuards(lineHeight, 'number') && { lineHeight },
    center && { textAlign: 'center' },
    right && { textAlign: 'right' },
    justify && { textAlign: 'justify' },
    padding !== undefined && handleGutter('padding', padding),
    margin !== undefined && handleGutter('margin', margin),
    style
  ])
}
export function Typography(props: Readonly<CommonTextProps>) {
  const typoStyles = createTypoStyles(props)

  if (props.children === undefined || props.children === null) {
    return null
  }

  return (
    <NativeText allowFontScaling={false} {...props} style={typoStyles}>
      {props.children}
    </NativeText>
  )
}
