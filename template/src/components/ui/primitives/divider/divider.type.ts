import type { ViewStyle } from 'react-native'

import type Colors from '@theme/colors'

export type TDividerProps = {
  /**
   * Orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'

  /**
   * Optional label text to display in the middle of the divider
   */
  label?: string

  /**
   * Color of the divider line
   * @default 'gray_200'
   */
  color?: keyof typeof Colors

  /**
   * Color of the label text
   * @default 'gray_500'
   */
  labelColor?: keyof typeof Colors

  /**
   * Spacing around the divider (margin)
   * @default 0
   */
  spacing?: number

  /**
   * Thickness of the divider line
   * @default 1
   */
  thickness?: number

  /**
   * Custom style for the container
   */
  style?: ViewStyle
}
