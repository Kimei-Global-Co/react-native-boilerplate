import type { FlexStyle, TextProps } from 'react-native'

import type { Colors } from '@theme/colors'
import type { EmbeddedFontKey, FontTokenKey } from '@theme/fonts'
import type { DefaultStyleProps } from 'shared/types/stylesheet.type'

export interface CommonTextProps extends DefaultStyleProps, TextProps {
  /**
   * Typography token preset (Atlassian-style), ex: `"font.body"` or `"font.heading.small"`.
   *
   * If provided, it defines `fontFamily`, `fontSize`, and `lineHeight` defaults.
   * You can still override with `fontFamily`, `size`, and `lineHeight`.
   */
  fontToken?: FontTokenKey
  /**
   * Custom embedded font family override.
   *
   * Use the embedded font keys (ex: **Nunito_400Regular**, **Nunito_900Black**).
   * The component will select the correct family name per platform.
   */
  fontFamily?: EmbeddedFontKey
  /**
   * Color of text - key of **Colors (theme/colors.ts)** or **Color keywords**
   *
   * Default is **"primaryText"**
   */
  color?: keyof typeof Colors

  /**
   * Specifies text alignment. textAlign: 'center'
   */
  center?: boolean

  /**
   * Specifies text alignment. textAlign: 'right'
   */
  right?: boolean

  /**
   * Specifies text alignment. textAlign: 'justify'
   */
  justify?: boolean

  /**
   * Line height of text
   *
   * Default is **size** * 1.5
   */
  lineHeight?: number

  /**
   * Background color of text - key of Colors (theme/colors.ts) or Color keywords
   */
  backgroundColor?: keyof typeof Colors

  width?: FlexStyle['width']

  minWidth?: FlexStyle['minWidth']
}
