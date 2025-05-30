import { ImageSourcePropType, ViewStyle } from 'react-native'

import { localImage } from '@assets/images'

export interface HeaderAction {
  icon: ImageSourcePropType
  onPress?: () => void
  disabled?: boolean
}

export interface HeaderProps {
  /** Show back button */
  showBack?: boolean
  /** Back button press handler */
  onBack?: () => void
  /** Title text */
  title?: string
  /** Subtitle text */
  subtitle?: string
  /** Avatar image source */
  avatar?: ImageSourcePropType
  /** Right action buttons */
  rightActions?: HeaderAction[]
  /** Container style */
  style?: ViewStyle
}
export interface HeaderAction {
  id: string
  icon: ImageSourcePropType
  onPress?: () => void
  disabled?: boolean
}

export const DEFAULT_ACTIONS: HeaderAction[] = [
  {
    id: 'icNoti',
    icon: localImage().icNoti
  },
  {
    id: 'icAction',
    icon: localImage().icAction
  }
]
