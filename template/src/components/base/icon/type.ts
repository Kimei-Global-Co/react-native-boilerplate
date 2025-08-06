import {
  type TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableOpacity,
  type ViewStyle
} from 'react-native'

import { type IconName, type IconType } from '@assets/icons'
import type Colors from '@theme/colors'

interface CommonIconProps extends TouchableHighlightProps {
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

export type IconComponentProps = {
  [K in IconType]: { type: K; name: IconName<K> } & CommonIconProps
}[IconType]
