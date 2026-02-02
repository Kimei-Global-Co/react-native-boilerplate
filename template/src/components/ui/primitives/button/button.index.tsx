import { useEffect } from 'react'
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleSheet
} from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign'
import Block from '@components/ui/layouts/block/block.index'
import Typography from '@components/ui/primitives/typography/typo.index'
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

export const isNative = Platform.OS === 'ios' || Platform.OS === 'android'

const DEFAULT_TARGET_SCALE = isNative ? 0.98 : 1
const TIME = 80
const OFFSET = 5

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
          withTiming(-OFFSET, { duration: TIME / 2 }),
          withRepeat(withTiming(OFFSET, { duration: TIME }), 3, true),
          withTiming(0, { duration: TIME / 2 })
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
            withTiming(reducedMotion ? 1 : targetScale, { duration: 100 })
          )
        }}
        onPressOut={(e) => {
          onPressOut?.(e)
          cancelAnimation(scale)
          scale.set(withTiming(1, { duration: 100 }))
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
    <Block gap={5} justify='center' row style={styles.content}>
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
    <Typography center style={textStyle}>
      {content}
    </Typography>
  )
}

function ButtonIcon({
  children
}: Readonly<ButtonIconProps>): React.JSX.Element {
  return <>{children}</>
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

const Button = Object.assign(ButtonRoot, {
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

export default Button

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
