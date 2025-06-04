import type { ImageSourcePropType, ViewStyle } from 'react-native'

import { Icons } from '@assets/icons'

export interface HeaderAction {
  /** Unique identifier for the action */
  id: string
  /** Icon name from Icons enum */
  name: string
  /** Icon type/family */
  type: keyof typeof Icons
  /** Action handler */
  onPress?: () => void
  /** Disable the action button */
  disabled?: boolean
}

export interface HeaderProps {
  /** Show back button */
  isBack?: boolean
  /** Title text - Required */
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

export const DEFAULT_ACTIONS: HeaderAction[] = [
  {
    id: 'icNoti',
    name: 'bell-outline',
    type: 'materialCommunityIcons'
  },
  {
    id: 'icAction',
    name: 'dots-vertical',
    type: 'materialCommunityIcons'
  }
]
