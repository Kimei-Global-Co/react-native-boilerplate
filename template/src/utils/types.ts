import type { FlexStyle, ViewStyle } from 'react-native'

import Colors from '@theme/colors'


export interface DefaultStyleProps {
  /**
   * Define how your items are going to **“fill”** over the available space along your main axis ([flex](https://reactnative.dev/docs/layout-props#flex))
   *
   * ```
   * flex="true" <=> {flex: 1}
   * ```
   * ```
   * flex=number <=> {flex: number}
   * ```
   */
  flex?: boolean | number

  /**
   * Describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. ([flexShirnk](https://reactnative.dev/docs/layout-props#flexshrink))
   *
   * ```
   * flexShrink="true" <=> {flexShrink: 1}
   * ```
   * ```
   * flexShrink=number <=> {flexShrink: number}
   * ```
   */
  flexShrink?: boolean | number

  /**
   * Describes how any space within a container should be distributed among its children along the main axis ([flexGrow](https://reactnative.dev/docs/layout-props#flexgrow))
   *
   * ```
   * flexGrow="true" <=> {flexGrow: 1}
   * ```
   * ```
   * flexGrow=number <=> {flexGrow: number}
   * ```
   */
  flexGrow?: boolean | number

  /**
   * **padding** creates extra space within an component
   *
   * ```
    padding={16}
    //or
    padding={{horizontal: 16, top: 12}}
    ```
   */
  padding?: number | GutterProps

  /**
   * **margin** creates extra space around an component
   *
   * ```
    margin={16}
    //or
    margin={{horizontal: 16, top: 12}}
    ```
   */
  margin?: number | GutterProps

  /**
   * Make component to square with value
   */
  square?: number

  /**
   * Make component to circular with value
   */
  round?: number

  /**
   * **border** works like border-width in CSS
   */
  border?: BorderProps | BorderType

  /**
   * Style of border
   */
  borderStyle?: ViewStyle['borderStyle']

  /**
   * Specifies that the flexible items will wrap if necessary
   */
  wrap?: boolean

  /**
   * Set an opacity value for component. The number should be in the range from **0.0** to **1.0**.
   */
  opacity?: number

  /**
   * Rounded border
   */
  radius?: number | RadiusProps

  alignSelf?: FlexStyle['alignSelf']
}

export type BorderProps = { width: number; color: keyof typeof Colors }

export type GutterProps = {
  top?: number
  left?: number
  right?: number
  bottom?: number
  vertical?: number
  horizontal?: number
}

export type RadiusProps = {
  bottomLeft?: number
  bottomRight?: number
  topLeft?: number
  topRight?: number
}

export type BorderType = {
  top?: BorderProps
  left?: BorderProps
  right?: BorderProps
  bottom?: BorderProps
}

export type SafeAreaInsetType = 'top' | 'bottom' | 'right' | 'left'

