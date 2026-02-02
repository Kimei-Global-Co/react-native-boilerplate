import type { PressableProps, StyleProp, ViewStyle } from 'react-native'

export interface ButtonProps
  extends Exclude<PressableProps, 'onPressIn' | 'onPressOut' | 'style'> {
  /**
   * Label of button
   */
  title?: string

  /**
   * Left icon
   */
  leftIcon?: React.ReactNode

  /**
   * Right icon
   */
  rightIcon?: React.ReactNode

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

export type ButtonIconProps = {
  children?: React.ReactNode
}

export type ContainerStyle = ViewStyle & { boxShadow?: string }
