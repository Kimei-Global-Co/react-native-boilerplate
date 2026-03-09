import { useEffect } from 'react'
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign'
import type { TIcon } from '@assets/icons'
import { Block } from '@components/ui/primitives/block/block.index'
import { Icon } from '@components/ui/primitives/icon/icon.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
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
import { when } from 'shared/utils/helper'
import {
  ButtonContext,
  normalizeVariant,
  useButtonContext
} from './button.context'
import type {
  ButtonIconProps,
  ButtonLabelProps,
  ButtonRootProps,
  ColorVariant
} from './button.type'
import {
  containerColorVariants,
  containerRadiusVariants,
  containerSizeVariants,
  textColorVariants,
  textSizeVariants
} from './button.variants'

const DEFAULT_TARGET_SCALE = 0.98
const SHAKE_DURATION = 80
const SHAKE_OFFSET = 5
const SHAKE_REPEATS = 3
const PRESS_ANIMATION_DURATION = 100

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign)

function ButtonRoot(props: Readonly<ButtonRootProps>): React.JSX.Element {
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

  return (
    <ButtonContext.Provider
      value={{
        disabled: !!disabledByState,
        state,
        title,
        variant: computedVariant
      }}
    >
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

function ButtonContent({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <Block gap={5} justify='center' row={true} style={styles.content}>
      {children}
    </Block>
  )
}

function ButtonPending(): React.JSX.Element | null {
  const { state } = useButtonContext('Button.Pending')
  if (state !== 'pending') {
    return null
  }
  return (
    <Animated.View
      entering={FadeInLeft}
      exiting={FadeOutUp}
      style={styles.pendingView}
    >
      <ActivityIndicator color='white' size='small' />
    </Animated.View>
  )
}

function ButtonSuccess(): React.JSX.Element | null {
  const { state } = useButtonContext('Button.Success')
  if (state !== 'success') {
    return null
  }
  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutLeft}>
      <AnimatedAntDesign color='green' name='check' size={24} />
    </Animated.View>
  )
}

function ButtonError(): React.JSX.Element | null {
  const { state } = useButtonContext('Button.Error')
  if (state !== 'error') {
    return null
  }
  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutLeft}>
      <AnimatedAntDesign color='red' name='close' size={24} />
    </Animated.View>
  )
}

function ButtonLabel({
  children
}: Readonly<ButtonLabelProps>): React.JSX.Element | null {
  const { title, variant } = useButtonContext('Button.Label')
  const content = children ?? title
  if (!content) {
    return null
  }

  const textStyle = [
    styles.textBase,
    textColorVariants[variant.color],
    textSizeVariants[variant.size]
  ]

  return (
    <Typography center={true} style={textStyle}>
      {content}
    </Typography>
  )
}

function ButtonIcon<T extends TIcon>(
  props: Readonly<ButtonIconProps<T>>
): React.JSX.Element {
  if ('children' in props) {
    return <>{props.children}</>
  }

  const { type, name, size, color, ...rest } = props

  return <Icon {...rest} color={color} name={name} size={size} type={type} />
}

function withColorVariant(color: ColorVariant) {
  return function ColorVariantButton(
    props: ButtonRootProps
  ): React.JSX.Element {
    return <ButtonRoot {...props} variant={{ ...props.variant, color }} />
  }
}

const ButtonPrimary = withColorVariant('primary')
const ButtonSecondary = withColorVariant('secondary')
const ButtonShadow = withColorVariant('shadow')
const ButtonBordered = withColorVariant('bordered')
const ButtonGhost = withColorVariant('ghost')

export const Button = Object.assign(ButtonRoot, {
  Bordered: ButtonBordered,
  Content: ButtonContent,
  Error: ButtonError,
  Ghost: ButtonGhost,
  Icon: ButtonIcon,
  Label: ButtonLabel,
  Pending: ButtonPending,
  Primary: ButtonPrimary,
  Secondary: ButtonSecondary,
  Shadow: ButtonShadow,
  Success: ButtonSuccess
})

const styles = StyleSheet.create({
  containerBase: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center'
  },
  disabled: {
    opacity: 0.6
  },
  pendingView: {
    height: 24,
    width: 24
  },
  textBase: {
    textAlign: 'center'
  }
})
