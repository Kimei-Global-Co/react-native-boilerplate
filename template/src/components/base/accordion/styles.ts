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
      borderWidth: 1,
      borderColor: '#0F56B3'
    }
  }

  return variants[variant]
}
