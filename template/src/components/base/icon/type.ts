import {
  type StyleProp,
  type TouchableHighlightProps,
  type ViewStyle
} from 'react-native'

import { type IconName, type IconType } from '@assets/icons'
import type Colors from '@theme/colors'

interface CommonIconProps extends TouchableHighlightProps {
  size?: number
  color?: keyof typeof Colors
  disabledStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
}

export type IconComponentProps = {
  [K in IconType]: { type: K; name: IconName<K> } & CommonIconProps
}[IconType]
