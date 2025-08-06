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
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#4A5568',
    borderWidth: 1,
    textColor: '#4A5568'
  },
  solid: {
    backgroundColor: '#4A5568',
    borderColor: 'transparent',
    borderWidth: 0,
    textColor: '#FFFFFF'
  },
  subtle: {
    backgroundColor: '#E2E8F0',
    borderColor: 'transparent',
    borderWidth: 0,
    textColor: '#1A202C'
  },
  surface: {
    backgroundColor: '#F7FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    textColor: '#1A202C'
  }
} as const

export const SIZE_STYLES = {
  lg: { fontSize: 16, height: 40, paddingHorizontal: 10 },
  md: { fontSize: 14, height: 32, paddingHorizontal: 8 },
  sm: { fontSize: 12, height: 24, paddingHorizontal: 6 }
} as const
