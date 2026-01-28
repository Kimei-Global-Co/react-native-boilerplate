import { StyleSheet, type TextStyle } from 'react-native'

import Colors from '@theme/colors'
import fonts from '@theme/fonts'
import { NativeText } from 'react-native/Libraries/Text/TextNativeComponent'
import { createDefaultStyle, handleGutter, typeGuards } from 'utils/helper'
import type { CommonTextProps } from './typo.type'

const createTypoStyles = (props: CommonTextProps): TextStyle => {
  const {
    style,
    fontType = 'regular',
    color = 'black',
    size = 14,
    lineHeight,
    backgroundColor,
    padding,
    margin,
    center,
    justify,
    right
  } = props

  return StyleSheet.flatten([
    createDefaultStyle(props as { [key: string]: unknown }),
    backgroundColor && {
      backgroundColor: Colors[backgroundColor] || backgroundColor
    },
    { ...fonts[fontType] },
    { color: Colors[color] ?? color },
    size && { fontSize: size },
    typeGuards(lineHeight, 'number') && { lineHeight },
    center && { textAlign: 'center' },
    right && { textAlign: 'right' },
    justify && { textAlign: 'justify' },
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    style
  ]) as TextStyle
}
export default function Typography(props: Readonly<CommonTextProps>) {
  const typoStyles = createTypoStyles(props)

  if (props.children === undefined || props.children === null) return null

  return (
    <NativeText allowFontScaling={false} {...props} style={typoStyles}>
      {props.children}
    </NativeText>
  )
}
