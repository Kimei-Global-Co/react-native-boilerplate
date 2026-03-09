import { type DimensionValue, StyleSheet, type ViewStyle } from 'react-native'

import { Colors } from '@theme/colors'
import { Spacing } from '@theme/layout'
import NativeView from 'react-native/Libraries/Components/View/ViewNativeComponent'
import {
  type EdgeInsets,
  useSafeAreaInsets
} from 'react-native-safe-area-context'
import {
  createDefaultStyle,
  createSizeStyle,
  handleGutter,
  handleInset,
  typeGuards
} from 'shared/utils/helper'
import type { BlockProps } from './block.type'

const createOffsetStyles = (
  top: BlockProps['top'],
  bottom: BlockProps['bottom'],
  left: BlockProps['left'],
  right: BlockProps['right']
): ViewStyle => {
  const resolveOffset = (
    value: BlockProps['top']
  ): DimensionValue | undefined => {
    if (typeGuards(value, 'string') && value in Spacing) {
      return Spacing[value as keyof typeof Spacing]
    }

    return value as DimensionValue | undefined
  }

  return StyleSheet.flatten<ViewStyle>([
    !typeGuards(top, 'undefined') && { top: resolveOffset(top) },
    !typeGuards(bottom, 'undefined') && { bottom: resolveOffset(bottom) },
    !typeGuards(left, 'undefined') && { left: resolveOffset(left) },
    !typeGuards(right, 'undefined') && { right: resolveOffset(right) }
  ])
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
    createDefaultStyle(props),
    createSizeStyle(size),
    align && { alignItems: align },
    justify && { justifyContent: justify },
    position && { position },
    createOffsetStyles(top, bottom, left, right),
    overflow && { overflow },
    padding !== undefined && handleGutter('padding', padding),
    margin !== undefined && handleGutter('margin', margin),
    typeGuards(gap, 'string')
      ? { gap: Spacing[gap] }
      : typeGuards(gap, 'number') && { gap },
    shadow && { boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' },
    linearGradient && { experimental_backgroundImage: linearGradient },
    handleInset(props, safeArea, padding),
    backgroundColor && {
      backgroundColor: Colors[backgroundColor]
    },
    style
  ])
}

export function Block(props: Readonly<BlockProps>) {
  const safeArea = useSafeAreaInsets()
  const { children, ...rest } = props
  const blockStyles = createBlockStyles(props, safeArea)

  return (
    <NativeView {...rest} style={blockStyles}>
      {children}
    </NativeView>
  )
}
