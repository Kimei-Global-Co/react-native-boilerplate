import type { TextStyle } from 'react-native'

export type TAvatarProps = {
  size?: number
  borderRadius?: number
  url?: string
  enableSkeleton?: boolean
  /** Fallback text to display when no image URL is provided or image fails to load (e.g., user initials) */
  fallback?: string
  /** Custom styles for the fallback text */
  fallbackStyle?: TextStyle
} & React.PropsWithChildren
