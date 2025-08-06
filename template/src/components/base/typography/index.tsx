import { StyleSheet } from 'react-native'

import { useTheme } from '@theme'
import { NativeText } from 'react-native/Libraries/Text/TextNativeComponent'
import { createDefaultStyle, handleGutter, typeGuards } from 'utils/helper'
import type { CommonTextProps } from './type'

export const Typography = function Typography(props: CommonTextProps) {
  const { colors, textVariants } = useTheme()

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
    right,
    width,
    minWidth
  } = props

  const textStyle = StyleSheet.flatten([
    createDefaultStyle(props as { [key: string]: unknown }),
    backgroundColor && {
      backgroundColor: colors[backgroundColor] || backgroundColor
    },
    textVariants[fontType],
    { color: colors[color] ?? color },
    size && { fontSize: size },
    width && { width },
    minWidth && { minWidth },
    typeGuards(lineHeight, 'number') && { lineHeight },
    center && { textAlign: 'center' },
    right && { textAlign: 'right' },
    justify && { textAlign: 'justify' },
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    style
  ])

  if (props.children === undefined || props.children === null) return null

  return (
    <NativeText allowFontScaling={false} {...props} style={textStyle}>
      {props.children}
    </NativeText>
  )
}
