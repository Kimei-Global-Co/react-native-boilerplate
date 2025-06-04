export type TagVariant = 'subtle' | 'solid' | 'outline' | 'surface'
export type TagSize = 'sm' | 'md' | 'lg'

export interface TagContextType {
  variant: TagVariant
  size: TagSize
}

export interface RootProps {
  variant?: TagVariant
  size?: TagSize
  children: React.ReactNode
}

export interface LabelProps {
  children: React.ReactNode
}

export interface CloseTriggerProps {
  onClose?: () => void
}

export const VARIANT_STYLES = {
  subtle: {
    backgroundColor: '#E2E8F0',
    textColor: '#1A202C',
    borderWidth: 0,
    borderColor: 'transparent'
  },
  solid: {
    backgroundColor: '#4A5568',
    textColor: '#FFFFFF',
    borderWidth: 0,
    borderColor: 'transparent'
  },
  outline: {
    backgroundColor: 'transparent',
    textColor: '#4A5568',
    borderWidth: 1,
    borderColor: '#4A5568'
  },
  surface: {
    backgroundColor: '#F7FAFC',
    textColor: '#1A202C',
    borderWidth: 1,
    borderColor: '#E2E8F0'
  }
} as const

export const SIZE_STYLES = {
  sm: { height: 24, fontSize: 12, paddingHorizontal: 6 },
  md: { height: 32, fontSize: 14, paddingHorizontal: 8 },
  lg: { height: 40, fontSize: 16, paddingHorizontal: 10 }
} as const
