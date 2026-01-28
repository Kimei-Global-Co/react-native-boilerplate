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
  state?: 'idle' | 'pending' | 'success' | 'error'

  variant?: {
    color: 'primary' | 'secondary' | 'shadow' | 'bordered'
    radius: 'sm' | 'md' | 'lg'
    size: 'sm' | 'md' | 'lg'
  }

  targetScale?: number

  style?: StyleProp<ViewStyle>
}
