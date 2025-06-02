import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export type AccordionVariant = 'default' | 'shadow' | 'bordered'

export interface AccordionContextType {
  isOpen: boolean
  toggle: () => void
}

export interface AccordionRootProps {
  variant?: 'default' | 'shadow' | 'bordered'
  children: ReactNode
  onChange?: (isOpen: boolean) => void
  style?: StyleProp<ViewStyle>
}
export interface AccordionTriggerProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}
export interface AccordionHeaderProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

export interface AccordionContentProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}
