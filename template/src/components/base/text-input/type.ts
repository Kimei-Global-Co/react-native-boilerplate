import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle
} from 'react-native'

import type { IconType } from '@assets/icons'
import Colors from '@theme/colors'

export type TextInputMode = 'default' | 'numeric' | 'password' | 'search'

export interface TextInputBaseProps extends Omit<TextInputProps, 'style'> {
  /** Input container style */
  containerStyle?: StyleProp<ViewStyle>
  /** Input style */
  inputStyle?: StyleProp<TextStyle>
  /** Label style */
  labelStyle?: StyleProp<TextStyle>
  /** Error message style */
  errorStyle?: StyleProp<TextStyle>
  /** Input mode */
  mode?: TextInputMode
  /** Input label */
  label?: string
  /** Error message */
  error?: string
  /** Left icon */
  leftIcon?: IconType
  /** Right icon */
  rightIcon?: IconType
  /** Show clear icon */
  clearable?: boolean
  /** Focus color */
  focusColor?: keyof typeof Colors
  /** Helper text */
  helper?: string
  /** Required field */
  required?: boolean
}
