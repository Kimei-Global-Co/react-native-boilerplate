import { Colors } from '@theme/colors'
import Svg, { Circle } from 'react-native-svg'

const SIZE_LG = 48
const SIZE_MD = 32
const SIZE_SM = 24
const SIZE_SMXL = 12

const spinnerSizeMap = new Map<SpinnerProps['size'], number>([
  ['lg', SIZE_LG],
  ['md', SIZE_MD],
  ['sm', SIZE_SM],
  ['smxl', SIZE_SMXL]
])

export type SpinnerProps = {
  size?: 'lg' | 'md' | 'sm' | 'smxl'
  color?: keyof typeof Colors
  secondaryColor?: keyof typeof Colors
  duration?: number
}

export const getSpinnerSize = (size: SpinnerProps['size']) => {
  return spinnerSizeMap.get(size) ?? SIZE_MD
}

export const SpinnerView = ({
  size = 'md',
  color = 'black',
  secondaryColor: secondaryColorProp
}: SpinnerProps) => {
  const secondaryColor = secondaryColorProp
    ? Colors[secondaryColorProp]
    : Colors.whiteF0

  const spinnerSize = spinnerSizeMap.get(size) ?? SIZE_MD

  return (
    <Svg height={spinnerSize} viewBox='0 0 32 32' width={spinnerSize}>
      <Circle
        cx={16}
        cy={16}
        fill='none'
        r={14}
        stroke={secondaryColor}
        strokeWidth={4}
      />
      <Circle
        cx={16}
        cy={16}
        fill='none'
        r={14}
        stroke={Colors[color]}
        strokeDasharray={80}
        strokeDashoffset={56}
        strokeWidth={4}
      />
    </Svg>
  )
}
