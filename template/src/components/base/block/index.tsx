import { StyleSheet, type ViewStyle } from 'react-native'

import { Spacing } from '@theme/layout'
import NativeView from 'react-native/Libraries/Components/View/ViewNativeComponent'
import {
  type EdgeInsets,
  useSafeAreaInsets
} from 'react-native-safe-area-context'
import {
  createDefaultStyle,
  handleGutter,
  handleInset,
  typeGuards
} from 'shared/utils/helper'
import type { BlockProps } from './block.type'

const createSizeStyle = (size: BlockProps['size']): ViewStyle => {
  if (typeGuards(size, 'number')) {
    return { height: size, width: size }
  }

  if (typeGuards(size, 'object')) {
    return {
      height: size.height ?? 0,
      width: size.width ?? 0
    }
  }

  return {}
}

const createPositionStyles = (
  top: BlockProps['top'],
  bottom: BlockProps['bottom'],
  left: BlockProps['left'],
  right: BlockProps['right']
): ViewStyle => {
  return StyleSheet.flatten([
    !typeGuards(top, 'undefined') && { top },
    !typeGuards(bottom, 'undefined') && { bottom },
    !typeGuards(left, 'undefined') && { left },
    !typeGuards(right, 'undefined') && { right }
  ]) as ViewStyle
}

const createBlockStyles = (
  props: BlockProps,
  safeArea: EdgeInsets
): ViewStyle => {
  const {
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
    linearGradient
  } = props

  return StyleSheet.flatten([
    createDefaultStyle(props as { [key: string]: unknown }),
    createSizeStyle(size),
    align && { alignItems: align },
    justify && { justifyContent: justify },
    row && { flexDirection: 'row' },
    position && { position },
    createPositionStyles(top, bottom, left, right),
    overflow && { overflow },
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    typeGuards(gap, 'string')
      ? { gap: Spacing[gap] }
      : typeGuards(gap, 'number') && { gap },
    shadow && { boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' },
    linearGradient && { experimental_backgroundImage: linearGradient },
    handleInset(props, safeArea, padding),
    backgroundColor && {
      backgroundColor: backgroundColor
    },
    style
  ]) as ViewStyle
}

export default function Block(props: Readonly<BlockProps>) {
  const safeArea = useSafeAreaInsets()
  const { children, ...rest } = props
  const blockStyles = createBlockStyles(props, safeArea)

  return (
    <NativeView {...rest} style={blockStyles}>
      {children}
    </NativeView>
  )
}
