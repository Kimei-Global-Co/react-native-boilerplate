import type {
  PressableProps,
  StyleProp,
  ViewStyle
} from 'react-native'

import type { IconName, IconType } from '@assets/icons'
import type Colors from '@theme/colors'

interface CommonIconProps extends Omit<PressableProps, 'style'> {
  size?: number
  color?: keyof typeof Colors
  disabledStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  activeOpacity?: number
}

export type IconProps<T extends IconType> = {
  type: T
  name: IconName<T>
} & CommonIconProps

export type IconComponentProps = {
  [K in IconType]: IconProps<K>
}[IconType]
