import type {
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle
} from 'react-native'

import type { IconName, Icons } from '@assets/icons'

// Base props for container components
export interface BaseHeaderProps {
  children?: React.ReactNode
  style?: ViewStyle
}

// Root component props
export interface HeaderRootProps extends BaseHeaderProps {}

// Action button props
export interface HeaderActionProps {
  icon: IconName<keyof typeof Icons>
  type?: keyof typeof Icons
  onPress?: () => void
  disabled?: boolean
  style?: ViewStyle
  color?: string
  size?: number
}

// Avatar props
export interface HeaderAvatarProps {
  source: ImageSourcePropType
  size?: number
  style?: ImageStyle
}

// Back button props
export interface HeaderBackButtonProps {
  onPress?: () => void
  style?: ViewStyle
  color?: string
}

// Title/Subtitle props
export interface HeaderTextProps {
  children: string | React.ReactNode
  style?: TextStyle
  color?: string
  numberOfLines?: number
  center?: boolean
}
