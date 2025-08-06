import theme from '@theme'
import Svg, { Circle } from 'react-native-svg'

const spinnerSizeMap = new Map<SpinnerProps['size'], number>([
  ['lg', 48],
  ['md', 32],
  ['sm', 24],
  ['smxl', 12]
])

export type SpinnerProps = {
  size?: 'lg' | 'md' | 'sm' | 'smxl'
  color?: string
  secondaryColor?: string
  duration?: number
}

export const getSpinnerSize = (size: SpinnerProps['size']) => {
  return spinnerSizeMap.get(size) ?? 32
}

export const SpinnerView = ({
  size = 'md',
  color = theme.colors.black,
  secondaryColor: secondaryColorProp
}: SpinnerProps) => {
  const secondaryColor = secondaryColorProp
    ? secondaryColorProp
    : theme.colors.whiteF0

  return (
    <Svg
      height={spinnerSizeMap.get(size) ?? 32}
      viewBox='0 0 32 32'
      width={spinnerSizeMap.get(size) ?? 32}
    >
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
        stroke={color}
        strokeDasharray={80}
        strokeDashoffset={56}
        strokeWidth={4}
      />
    </Svg>
  )
}
