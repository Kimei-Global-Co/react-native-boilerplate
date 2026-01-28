import { useEffect } from 'react'
import { ActivityIndicator, Platform, Pressable } from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign'
import Colors from '@theme/colors'
import { when } from '@utils/helper'
import Animated, {
  cancelAnimation,
  FadeInDown,
  FadeInLeft,
  FadeOutLeft,
  FadeOutUp,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated'
import { StyleSheet } from 'react-native-unistyles'
import Block from '../block'
import Typography from '../typography'
import type { ButtonProps } from './button.type'
export const isNative = Platform.OS === 'ios' || Platform.OS === 'android'

const DEFAULT_TARGET_SCALE = isNative ? 0.98 : 1
const TIME = 80
const OFFSET = 5

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign)

export default function Button(
  props: Readonly<ButtonProps>
): React.JSX.Element {
  const {
    targetScale = DEFAULT_TARGET_SCALE,
    title,
    children,
    style,
    onPressIn,
    onPressOut,
    variant = { color: undefined, radius: 'md', size: 'md' },
    state,
    ...rest
  } = props
  const reducedMotion = useReducedMotion()

  styles.useVariants({ ...variant })

  const shakeOffset = useSharedValue(0)
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.get() },
      ...when(state === 'error', [{ translateX: shakeOffset.get() }], [])
    ]
  }))

  useEffect(() => {
    if (state === 'error') {
      shakeOffset.set(
        withSequence(
          withTiming(-OFFSET, { duration: TIME / 2 }),
          withRepeat(withTiming(OFFSET, { duration: TIME }), 3, true),
          withTiming(0, { duration: TIME / 2 })
        )
      )
    }
  }, [state, shakeOffset])

  return (
    <AnimatedPressable
      accessibilityRole='button'
      disabled={state === 'pending' || props.disabled}
      onPressIn={(e) => {
        onPressIn?.(e)
        cancelAnimation(scale)
        scale.set(withTiming(targetScale, { duration: 100 }))
      }}
      onPressOut={(e) => {
        onPressOut?.(e)
        cancelAnimation(scale)
        scale.set(withTiming(1, { duration: 100 }))
      }}
      style={[!reducedMotion && animatedStyle, styles.container, style]}
      {...rest}
    >
      <Block gap={5} justify='center' row>
        {state === 'pending' && (
          <Animated.View
            entering={FadeInLeft}
            exiting={FadeOutUp}
            style={styles.pendingView}
          >
            <ActivityIndicator color='white' size='small' />
          </Animated.View>
        )}
        {state === 'success' && (
          <Animated.View entering={FadeInDown} exiting={FadeOutLeft}>
            <AnimatedAntDesign
              color={Colors.green_500}
              name='check'
              size={24}
            />
          </Animated.View>
        )}
        {state === 'error' && (
          <Animated.View entering={FadeInDown} exiting={FadeOutLeft}>
            <AnimatedAntDesign color={Colors.red_500} name='close' size={24} />
          </Animated.View>
        )}
        {typeof children === 'function'
          ? null
          : (children ??
            (Boolean(title) && (
              <Typography center style={styles.text}>
                {title}
              </Typography>
            )))}
      </Block>
    </AnimatedPressable>
  )
}

const styles = StyleSheet.create((theme) => ({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    variants: {
      color: {
        bordered: {
          backgroundColor: theme.colors.transparent,
          borderWidth: 1
        },
        default: {
          backgroundColor: theme.colors.gray_700
        },
        primary: {
          backgroundColor: theme.colors.primary
        },
        secondary: {
          backgroundColor: theme.colors.secondary
        },
        shadow: {
          backgroundColor: theme.colors.blue_200,
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
        }
      },
      radius: {
        lg: {
          borderRadius: 14
        },
        md: {
          borderRadius: 12
        },
        none: {
          borderRadius: 0
        },
        sm: {
          borderRadius: 8
        }
      },
      size: {
        lg: {
          height: 48
        },
        md: {
          height: 40
        },
        sm: {
          height: 32
        }
      }
    },
    width: '100%'
  },
  pendingView: {
    height: 24,
    width: 24
  },
  text: {
    variants: {
      color: {
        bordered: {
          color: theme.colors.gray_darkest
        },
        default: {
          color: theme.colors.white
        },
        primary: {
          color: theme.colors.gray_darkest
        },
        secondary: {
          color: theme.colors.gray_darkest
        },
        shadow: {
          color: theme.colors.gray_darkest
        }
      },
      size: {
        lg: { ...theme.fonts.bold },
        md: { ...theme.fonts.medium },
        sm: { ...theme.fonts.regular }
      }
    }
  }
}))
