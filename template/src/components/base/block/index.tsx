import { type ViewStyle } from 'react-native'

import Colors from '@theme/colors'
import { Spacing } from '@theme/layout'
import NativeView from 'react-native/Libraries/Components/View/ViewNativeComponent'
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles'
import {
  createDefaultStyle,
  handleGutter,
  handleInset,
  typeGuards
} from 'utils/helper'
import type { BlockProps } from './type'

const createSizeStyle = (size: BlockProps['size']): ViewStyle => {
  if (typeGuards(size, 'number')) return { height: size, width: size }

  if (typeGuards(size, 'object'))
    return {
      height: size.height ?? 0,
      width: size.width ?? 0
    }

  return {}
}

const createBlockStyles = (props: BlockProps): ViewStyle => {
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
    !typeGuards(top, 'undefined') && { top },
    !typeGuards(bottom, 'undefined') && { bottom },
    !typeGuards(left, 'undefined') && { left },
    !typeGuards(right, 'undefined') && { right },
    overflow && { overflow },
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    typeGuards(gap, 'string')
      ? { gap: Spacing[gap] }
      : typeGuards(gap, 'number') && { gap },
    shadow && { boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' },
    linearGradient && { experimental_backgroundImage: linearGradient },
    handleInset(props, UnistylesRuntime.insets, padding),
    backgroundColor && {
      backgroundColor: Colors[backgroundColor] ?? backgroundColor
    },
    style
  ]) as ViewStyle
}

export default function Block(
  props: BlockProps & { ref?: React.Ref<NativeView> }
) {
  const { children, ...rest } = props
  const blockStyles = createBlockStyles(props)

  return (
    <NativeView {...rest} ref={props.ref} style={blockStyles}>
      {children}
    </NativeView>
  )
}
