import type { ReactNode, Ref } from 'react'
import type {
  TextInput as RNTextInput,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle
} from 'react-native'

import type { IconName } from '@assets/icons'
import type { Colors } from '@theme/colors'

/**
 * Main Props for the Input component.
 * Focused purely on the input field and its immediate decorators.
 */
export interface InputProps extends Omit<TextInputProps, 'style'> {
  /** Main root block style (the outer wrapper of the input row) */
  style?: StyleProp<ViewStyle>

  /** Direct TextInput style override */
  inputStyle?: StyleProp<TextStyle>

  /** Left-side icon or component. If a string is provided, it must be a valid Feather icon name. */
  leftIcon?: ReactNode | IconName<'feather'>

  /** Right-side icon or component. If a string is provided, it must be a valid Feather icon name. */
  rightIcon?: ReactNode | IconName<'feather'>

  /** Shows a clear button on the right when there's internal text content */
  clearable?: boolean

  /** Color name from theme for focus border */
  focusColor?: keyof typeof Colors

  /**
   * React 19 forward-compatible ref.
   * Direct access to the native TextInput methods.
   */
  ref?: Ref<RNTextInput>

  /**
   * Children for custom composition.
   * If provided, the default internal layout (Icons + Field) is bypassed.
   */
  children?: ReactNode

  /** Optional error state for border highlighting */
  error?: boolean
}

/**
 * Props for Input.Field sub-component
 */
export interface InputFieldProps extends TextInputProps {
  style?: StyleProp<TextStyle>
}

/**
 * Props for Input.Icon sub-component
 */
export interface InputIconProps {
  children?: ReactNode | IconName<'feather'>
  position?: 'left' | 'right'
  style?: StyleProp<ViewStyle>
}

export type { RNTextInput }
