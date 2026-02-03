import type { PressableProps, StyleProp, ViewStyle } from 'react-native'

import type { IconType } from '@assets/icons'
import type { IconProps } from '@components/ui/primitives/icon/icon.type'

export interface ButtonProps
  extends Exclude<PressableProps, 'onPressIn' | 'onPressOut' | 'style'> {
  /**
   * Label of button
   */
  title?: string

  /**
   * State for control button
   */
  state?: ButtonState

  variant?: ButtonVariant

  targetScale?: number

  style?: StyleProp<ViewStyle>
}

export type ButtonState = 'idle' | 'pending' | 'success' | 'error'

export type ColorVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'shadow'
  | 'bordered'
  | 'ghost'

export type RadiusVariant = 'none' | 'sm' | 'md' | 'lg'

export type SizeVariant = 'sm' | 'md' | 'lg'

export type ButtonVariant = {
  color?: ColorVariant
  radius?: RadiusVariant
  size?: SizeVariant
}

export type ButtonRootProps = ButtonProps & {
  children?: React.ReactNode
}

export type ButtonContextValue = {
  state: ButtonState
  title?: string
  variant: Required<ButtonVariant>
  disabled: boolean
}

export type ButtonLabelProps = {
  children?: React.ReactNode
}

export type ButtonIconProps<T extends IconType = IconType> =
  | { children: React.ReactNode }
  | IconProps<T>

export type ContainerStyle = ViewStyle & { boxShadow?: string }
