import { Colors } from '@theme/colors'
import Svg, { Circle } from 'react-native-svg'
import { getSpinnerSize } from './spinner.utils'

export type SpinnerProps = {
  size?: 'lg' | 'md' | 'sm' | 'smxl'
  color?: keyof typeof Colors
  secondaryColor?: keyof typeof Colors
  duration?: number
}

export const SpinnerView = ({
  size = 'md',
  color = 'black',
  secondaryColor: secondaryColorProp
}: SpinnerProps) => {
  const secondaryColor = secondaryColorProp
    ? Colors[secondaryColorProp]
    : Colors.whiteF0

  const spinnerSize = getSpinnerSize(size)

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
