import type { TextStyle } from 'react-native'

import type { Colors } from '@theme/colors'

export type TAvatarProps = {
  size?: number
  borderRadius?: number
  url?: string
  enableSkeleton?: boolean
  /** Fallback text to display when no image URL is provided or image fails to load (e.g., user initials) */
  fallback?: string
  /** Custom styles for the fallback text */
  fallbackStyle?: Exclude<TextStyle, 'color'> & { color: keyof typeof Colors }
} & React.PropsWithChildren
