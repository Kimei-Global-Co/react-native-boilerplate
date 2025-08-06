import type { FlexStyle, ViewProps, ViewStyle } from 'react-native'

import Colors from '@theme/colors'
import type { Spacing } from '@theme/layout'
import type { DefaultStyleProps, SafeAreaInsetType } from 'utils/types'

export interface BlockProps extends DefaultStyleProps, ViewProps {
  /**
   * Size of block
   * Example:
   * ```
   * <Block
   *   size={{ width: 120, height: 100 }}
   * />
   * ```
   * or
   * ```
   * <Block
   *  size={100}
   * />
   * ```
   */

  size?: { width?: FlexStyle['width']; height?: FlexStyle['height'] } | number
  /**
   * The flexible items are displayed horizontally, as a row
   */
  row?: boolean

  /**
   * Background color of the component - (key of Colors (theme/colors.ts) or Color keywords)
   */
  backgroundColor?: keyof typeof Colors

  /**
   * Describes how to align children along the cross axis of their container
   */
  align?: FlexStyle['alignItems']

  /**
   * Describes how to align children within the main axis of their container
   */
  justify?: FlexStyle['justifyContent']

  /**
   * Position in React Native is similar to regular CSS
   */
  position?: FlexStyle['position']

  /**
   * **top** is the number of logical pixels to offset the top edge of this component.
   */
  top?: number | string

  /**
   * **bottom** is the number of logical pixels to offset the top edge of this component.
   */
  bottom?: number | string

  /**
   * **left** is the number of logical pixels to offset the top edge of this component.
   */
  left?: number | string

  /**
   * **right** is the number of logical pixels to offset the top edge of this component.
   */
  right?: number | string

  /**
   * Render content within the safe area boundaries of a device
   * Example:
   * ```
   * <Block
   *   gap="x"
   * />
   * ```
   * or
   * ```
   * <Block
   *  gap={10}
   * />
   * ```
   */

  gap?: number | keyof typeof Spacing

  /**
   * Render content within the safe area boundaries of a device
   * Example:
   * ```
   * <Block
   *   inset="top"
   * />
   * ```
   * or
   * ```
   * <Block
   *   inset={["top", "bottom"]}
   * />
   * ```
   */
  inset?: SafeAreaInsetType | SafeAreaInsetType[]

  /**
   * Enable default shadow style of component
   * ```
   * {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    }
   * ```
   */
  shadow?: boolean

  overflow?: ViewStyle['overflow']
}
