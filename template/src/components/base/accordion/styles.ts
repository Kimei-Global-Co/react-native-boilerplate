import type { AccordionVariant } from './type'

export const createVariantStyles = (
  variant: AccordionVariant
): Record<string, string | number | { width: number; height: number }> => {
  const variants = {
    bordered: {
      backgroundColor: '#E3EDFB',
      borderColor: '#0F56B3',
      borderRadius: 14
    },
    default: {
      backgroundColor: '#E3EDFB'
    },
    shadow: {
      backgroundColor: '#E3EDFB',
      borderRadius: 14,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15);'
    },
    split: {
      backgroundColor: '#E3EDFB',
      borderColor: '#D1D5DB',
      borderRadius: 14,
      borderWidth: 1,
      marginBottom: -1
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
