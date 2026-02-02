import { TouchableWithoutFeedback } from 'react-native'

import type { BottomSheetBackdropProps } from '@discord/bottom-sheet'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'

export const HANDLE_HEIGHT = 24

export const DEFAULT_SNAPPOINTS = ['90%']

export function createCustomBackdrop(
  onClose?: (() => void) | undefined
): React.FC<BottomSheetBackdropProps> {
  const CustomBackdrop = ({
    animatedIndex,
    style
  }: BottomSheetBackdropProps): React.JSX.Element => {
    // animated variables
    const opacity = useAnimatedStyle(() => ({
      opacity: interpolate(
        animatedIndex.get(), // current snap index
        [-1, 0], // input range
        [0, 0.5], // output range
        Extrapolation.CLAMP
      )
    }))

    const containerStyle = [
      style,
      { backgroundColor: 'rgba(35, 45, 58, 0.6)' },
      opacity
    ]

    return (
      <TouchableWithoutFeedback
        accessibilityHint=''
        accessibilityLabel='close'
        onAccessibilityEscape={() => {
          if (onClose !== undefined) {
            return onClose()
          }
        }}
        onPress={onClose}
      >
        <Animated.View style={containerStyle} />
      </TouchableWithoutFeedback>
    )
  }
  return CustomBackdrop
}
