import { forwardRef, memo } from 'react'
import { StyleSheet, ViewStyle } from 'react-native'

import Colors from '@theme/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import NativeView from 'react-native/Libraries/Components/View/ViewNativeComponent'
import {
  createDefaultStyle,
  handleGutter,
  handleInset,
  typeGuards
} from 'utils/helper'

import type { BlockProps } from './type'

const createSizeStyle = (size: BlockProps['size']): ViewStyle => {
  if (typeGuards(size, 'number')) {
    return { width: size, height: size }
  }
  if (typeof size === 'object') {
    return {
      width: size.width ?? 0,
      height: size.height ?? 0
    }
  }
  return {}
}

const createShadowStyle = (): ViewStyle => ({
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 3
})

export const Block = memo(
  forwardRef<NativeView, BlockProps>(function Block(
    props: BlockProps,
    ref: React.ForwardedRef<NativeView>
  ) {
    const safeArea = useSafeAreaInsets()
    const {
      children,
      style,
      size,
      backgroundColor,
      align,
      justify,
      row,
      position,
      top,
      bottom,
      left,
      right,
      gap,
      padding,
      margin,
      shadow,
      overflow,
      ...rest
    } = props

    const blockStyles = StyleSheet.flatten([
      createDefaultStyle(props as { [key: string]: unknown }),
      createSizeStyle(size),
      align && { alignItems: align },
      justify && { justifyContent: justify },
      row && { flexDirection: 'row' },
      position && { position },
      !typeGuards(top, 'undefined') && { top },
      !typeGuards(bottom, 'undefined') && { bottom },
      !typeGuards(left, 'undefined') && { left },
      !typeGuards(right, 'undefined') && { right },
      overflow && { overflow },
      padding && handleGutter('padding', padding),
      margin && handleGutter('margin', margin),
      gap && { gap },
      shadow && createShadowStyle(),
      handleInset(props, safeArea, padding),
      backgroundColor && {
        backgroundColor: Colors[backgroundColor] || backgroundColor
      },
      style
    ])

    return (
      <NativeView {...rest} ref={ref} style={blockStyles}>
        {children}
      </NativeView>
    )
  })
)
