import { ReactNode } from 'react'
import { TextStyle, ViewStyle } from 'react-native'

export type ButtonVariant = 'solid' | 'bordered' | 'shadow' | 'ghost'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonPresetColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

export interface ButtonProps {
  /** Button content */
  children?: ReactNode
  /** Text to display */
  text?: string
  /** Visual variant of button */
  variant?: ButtonVariant
  /** Size preset of button */
  size?: ButtonSize
  /** Color preset or custom color */
  color?: string
  /** Disabled state */
  disabled?: boolean
  /** Loading state */
  loading?: boolean
  /** Border width of button */
  borderWidth?: number
  /** Border color of button */
  borderColor?: string
  /** Border radius of button */
  borderRadius?: number
  /** Custom styles for container */
  style?: ViewStyle
  /** Custom styles for text */
  textStyle?: TextStyle
  /** Callback on press */
  onPress?: () => void
}
