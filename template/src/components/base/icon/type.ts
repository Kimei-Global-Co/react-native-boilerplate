import {
  TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableOpacity,
  ViewStyle
} from 'react-native'

import { IconType } from '@assets/icons'

export interface IconComponentProps extends TouchableHighlightProps {
  type: IconType
  name: string
  size?: number
  color?: string
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
