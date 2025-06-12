import {
  type TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableOpacity,
  type ViewStyle
} from 'react-native'

import { type IconType } from '@assets/icons'
import type Colors from '@theme/colors'

export interface IconComponentProps extends TouchableHighlightProps {
  type: IconType
  name: string
  size?: number
  color?: keyof typeof Colors
  disabledStyle?: ViewStyle
  style?: ViewStyle

  /**
   * Button Component
   * Default:
   * - Android: TouchableNativeFeedback
   * - Other: TouchableOpacity
   */
  ButtonComponent?: typeof TouchableNativeFeedback | typeof TouchableOpacity
}
