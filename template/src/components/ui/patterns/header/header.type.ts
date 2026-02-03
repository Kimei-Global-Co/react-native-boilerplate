import type { TextStyle, ViewStyle } from 'react-native'

import type { IconType } from '@assets/icons'
import type { IconProps } from '@components/ui/primitives/icon/icon.type'
import type { TImageProps } from '@components/ui/primitives/image/image.type'

// Base props for container components
interface BaseHeaderProps {
  children?: React.ReactNode
  style?: ViewStyle
}

// Root component props
export interface HeaderRootProps extends BaseHeaderProps {}

type HeaderSectionPosition = 'left' | 'right' | 'content'

export interface HeaderSectionProps extends BaseHeaderProps {
  position: HeaderSectionPosition
}

// Action button props
type HeaderActionBaseProps = {
  onPress?: () => void
  disabled?: boolean
  style?: ViewStyle
  size?: number
}

export type HeaderActionProps<T extends IconType = IconType> =
  HeaderActionBaseProps & Omit<IconProps<T>, 'children'>

// Avatar props
export interface HeaderAvatarProps extends TImageProps {}

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
