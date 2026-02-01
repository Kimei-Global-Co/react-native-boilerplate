import { createContext, useContext } from 'react'

import type { ButtonContextValue, ButtonVariant } from './button.type'

export const ButtonContext = createContext<ButtonContextValue | null>(null)

export function useButtonContext(component: string): ButtonContextValue {
  const value = useContext(ButtonContext)
  if (!value) {
    throw new Error(`${component} must be used inside Button.Root`)
  }
  return value
}

export function normalizeVariant(
  variant?: ButtonVariant
): Required<ButtonVariant> {
  return {
    color: variant?.color ?? 'default',
    radius: variant?.radius ?? 'md',
    size: variant?.size ?? 'md'
  }
}
