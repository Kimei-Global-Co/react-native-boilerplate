import type { StyleProp, ViewStyle } from 'react-native'

export type AccordionVariant = 'default' | 'shadow' | 'bordered' | 'split'

export interface AccordionContextType {
  expandedKey: string | null
  toggleItem: (key: string) => void
  variant: AccordionVariant
}

export interface AccordionProps {
  children: React.ReactNode
  variant?: AccordionVariant
  defaultExpandedKey?: string
  style?: StyleProp<ViewStyle>
}

export interface AccordionItemProps {
  itemKey: string
  title: string | React.ReactNode
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  isFirst?: boolean
  isLast?: boolean
}
