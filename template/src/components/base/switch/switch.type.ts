import type Colors from '@theme/colors'

export interface SwitchProps {
  value: boolean
  onValueChange: (value: boolean) => void
  trackColor?:
    | keyof typeof Colors
    | { active: keyof typeof Colors; inActive: keyof typeof Colors }
  thumbColor?:
    | keyof typeof Colors
    | { active: keyof typeof Colors; inActive: keyof typeof Colors }
  trackWidth?: number
  thumbWidth?: number
  disabled?: boolean
}
