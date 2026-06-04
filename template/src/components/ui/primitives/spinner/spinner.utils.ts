import type { SpinnerProps } from './spinner-view'

const SIZE_LG = 48
const SIZE_MD = 32
const SIZE_SM = 24
const SIZE_SMXL = 12

export const spinnerSizeMap = new Map<SpinnerProps['size'], number>([
  ['lg', SIZE_LG],
  ['md', SIZE_MD],
  ['sm', SIZE_SM],
  ['smxl', SIZE_SMXL]
])

export const getSpinnerSize = (size: SpinnerProps['size']): number => {
  return spinnerSizeMap.get(size) ?? SIZE_MD
}
