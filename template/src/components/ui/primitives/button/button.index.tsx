import { useEffect } from 'react'
import { Pressable, StyleSheet } from 'react-native'

import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated'
import { when } from 'shared/utils/helper'
import { ButtonContext, normalizeVariant } from './button.context'
import type { ButtonRootProps, ColorVariant } from './button.type'
import {
  containerColorVariants,
  containerRadiusVariants,
  containerSizeVariants
} from './button.variants'
import { ButtonContent } from './button-content'
import { ButtonError } from './button-error'
import { ButtonIcon } from './button-icon'
import { ButtonLabel } from './button-label'
import { ButtonPending } from './button-pending'
import { ButtonSuccess } from './button-success'

const DEFAULT_TARGET_SCALE = 0.98
const SHAKE_DURATION = 80
const SHAKE_OFFSET = 5
const SHAKE_REPEATS = 3
const PRESS_ANIMATION_DURATION = 100

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function Button(props: Readonly<ButtonRootProps>): React.JSX.Element {
  const {
    targetScale = DEFAULT_TARGET_SCALE,
    title,
    style,
    onPressIn,
    onPressOut,
    variant,
    state = 'idle',
    children,
    disabled,
    accessibilityLabel,
    ...rest
  } = props

  const reducedMotion = useReducedMotion()
  const computedVariant = normalizeVariant(variant)

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
          withTiming(-SHAKE_OFFSET, { duration: SHAKE_DURATION / 2 }),
          withRepeat(
            withTiming(SHAKE_OFFSET, { duration: SHAKE_DURATION }),
            SHAKE_REPEATS,
            true
          ),
          withTiming(0, { duration: SHAKE_DURATION / 2 })
        )
      )
    }
  }, [state, shakeOffset])

  const disabledByState = disabled || state === 'pending'

  const content = children ?? (
    <ButtonContent>
      <ButtonPending />
      <ButtonSuccess />
      <ButtonError />
      <ButtonLabel>{title}</ButtonLabel>
    </ButtonContent>
  )

  const containerStyle = [
    !reducedMotion && animatedStyle,
    styles.containerBase,
    containerColorVariants[computedVariant.color],
    containerRadiusVariants[computedVariant.radius],
    containerSizeVariants[computedVariant.size],
    disabledByState && styles.disabled,
    style
  ]

  const contextValue = {
    disabled: !!disabledByState,
    state,
    title,
    variant: computedVariant
  }

  return (
    <ButtonContext.Provider value={contextValue}>
      <AnimatedPressable
        accessibilityLabel={accessibilityLabel ?? title}
        accessibilityRole='button'
        accessibilityState={{
          busy: state === 'pending',
          disabled: disabledByState
        }}
        disabled={disabledByState}
        onPressIn={(e) => {
          onPressIn?.(e)
          cancelAnimation(scale)
          scale.set(
            withTiming(reducedMotion ? 1 : targetScale, {
              duration: PRESS_ANIMATION_DURATION
            })
          )
        }}
        onPressOut={(e) => {
          onPressOut?.(e)
          cancelAnimation(scale)
          scale.set(withTiming(1, { duration: PRESS_ANIMATION_DURATION }))
        }}
        style={containerStyle}
        {...rest}
      >
        {content}
      </AnimatedPressable>
    </ButtonContext.Provider>
  )
}

function withColorVariant(color: ColorVariant) {
  return function ColorVariantButton(
    props: ButtonRootProps
  ): React.JSX.Element {
    return <Button {...props} variant={{ ...props.variant, color }} />
  }
}

const ButtonPrimary = withColorVariant('primary')
const ButtonSecondary = withColorVariant('secondary')
const ButtonShadow = withColorVariant('shadow')
const ButtonBordered = withColorVariant('bordered')
const ButtonGhost = withColorVariant('ghost')

Button.Bordered = ButtonBordered
Button.Content = ButtonContent
Button.Error = ButtonError
Button.Ghost = ButtonGhost
Button.Icon = ButtonIcon
Button.Label = ButtonLabel
Button.Pending = ButtonPending
Button.Primary = ButtonPrimary
Button.Secondary = ButtonSecondary
Button.Shadow = ButtonShadow
Button.Success = ButtonSuccess

const styles = StyleSheet.create({
  containerBase: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  disabled: {
    opacity: 0.6
  }
})
