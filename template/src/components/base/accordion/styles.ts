import type { AccordionVariant } from './type'

export const createVariantStyles = (
  variant: AccordionVariant
): Record<string, string | number | { width: number; height: number }> => {
  const variants = {
    default: {
      backgroundColor: '#E3EDFB'
    },
    shadow: {
      backgroundColor: '#E3EDFB',
      borderRadius: 14,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3
    },
    bordered: {
      backgroundColor: '#E3EDFB',
      borderRadius: 14,
      borderColor: '#0F56B3'
    },
    split: {
      backgroundColor: '#E3EDFB',
      borderWidth: 1,
      borderColor: '#D1D5DB',
      marginBottom: -1,
      borderRadius: 14
    }
  }

  return variants[variant]
}

export const createSplitItemStyles = (
  variant: AccordionVariant,
  isFirst: boolean,
  isLast: boolean
): Record<string, string | number | { width: number; height: number }> => {
  if (variant !== 'split') return {}

  const baseStyles: Record<string, string | number> = {
    marginBottom: isLast ? 0 : -1
  }

  if (isFirst) {
    baseStyles.borderTopLeftRadius = 14
    baseStyles.borderTopRightRadius = 14
  }

  if (isLast) {
    baseStyles.borderBottomLeftRadius = 14
    baseStyles.borderBottomRightRadius = 14
  }

  return baseStyles
}
