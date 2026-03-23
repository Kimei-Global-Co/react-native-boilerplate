import { useEffect } from 'react'
import {
  Pressable,
  type PressableProps,
  type PressableStateCallbackType,
  StyleSheet,
  type TextStyle,
  View,
  type ViewStyle
} from 'react-native'

import { Colors } from '@theme/colors'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'
import { useMutative } from 'shared/hooks/use-mutative'
import { Block } from '../block/block.index'
import { Typography } from '../typography/typo.index'

export type CheckBoxProps = Omit<PressableProps, 'children' | 'onPress'> & {
  label?: React.ReactNode
  description?: React.ReactNode
  labelPosition?: 'left' | 'right'

  controlSize?: number
  iconSize?: number
  isChecked?: boolean
  defaultChecked?: boolean
  isIndeterminate?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  onChange?: (checked: boolean) => void

  boxStyle?: ViewStyle
  wrapperStyle?: ViewStyle
  labelStyle?: TextStyle
  descriptionStyle?: TextStyle
}

const DEFAULT_CONTROL_SIZE = 20
const DEFAULT_ICON_SIZE_RATIO = 0.7

const CHECK_BORDER_WIDTH = 2
const CHECK_MARK_WIDTH_RATIO = 0.8
const CHECK_MARK_HEIGHT_RATIO = 0.4
const CHECK_MARK_TRANSLATE_Y_RATIO = 0.1

const INDETERMINATE_BAR_HEIGHT = 2
const INDETERMINATE_BAR_WIDTH_RATIO = 0.6

const ICON_SCALE_BASE = 0.9
const ICON_SCALE_DELTA = 0.1
const ICON_HIDE_DURATION_MS = 120

function useControllableChecked(options: {
  isChecked: boolean | undefined
  defaultChecked: boolean
}) {
  const { isChecked, defaultChecked } = options
  const isControlled = isChecked !== undefined
  const [uncontrolledChecked, setUncontrolledChecked] =
    useMutative(defaultChecked)
  const checked = isControlled ? isChecked : uncontrolledChecked

  const setChecked = (next: boolean) => {
    if (!isControlled) {
      setUncontrolledChecked(next)
    }
  }

  return { checked, setChecked }
}

function getNextChecked(options: {
  checked: boolean
  isIndeterminate?: boolean
}) {
  const { checked, isIndeterminate } = options

  if (isIndeterminate) {
    return true
  }
  return !checked
}

function getA11yChecked(options: {
  checked: boolean
  isIndeterminate?: boolean
}) {
  const { checked, isIndeterminate } = options

  if (isIndeterminate) {
    return 'mixed' as const
  }
  return checked
}

function getA11yLabel(label: React.ReactNode) {
  if (typeof label === 'string') {
    return label
  }
  return undefined
}

function getBoxColors(options: {
  isChecked: boolean
  isDisabled?: boolean
  isInvalid?: boolean
}) {
  const { isChecked, isDisabled, isInvalid } = options

  let borderColor = Colors.gray_300
  if (isChecked) {
    borderColor = Colors.blue_600
  }
  if (isInvalid) {
    borderColor = Colors.red_600
  }

  let backgroundColor = Colors.white
  if (isChecked) {
    backgroundColor = Colors.blue_600
  }
  if (isDisabled) {
    backgroundColor = Colors.whiteEC
  }

  return { backgroundColor, borderColor }
}

function mergePressableStyle(options: {
  hasText: boolean
  isDisabled?: boolean
  style?: PressableProps['style']
}): PressableProps['style'] {
  const { hasText, isDisabled, style } = options
  const baseStyles = [
    hasText && styles.wrapperPressable,
    isDisabled && styles.disabledWrapper
  ]

  if (typeof style === 'function') {
    return (state: PressableStateCallbackType) => [...baseStyles, style(state)]
  }
  return [...baseStyles, style]
}

function resolveControlSize(options: {
  controlSize?: number
  boxStyle?: ViewStyle
}) {
  const { boxStyle, controlSize } = options
  if (typeof controlSize === 'number') {
    return controlSize
  }

  const w = boxStyle?.width
  const h = boxStyle?.height
  const candidates = [w, h].filter((v): v is number => typeof v === 'number')
  if (candidates.length > 0) {
    return Math.min(...candidates)
  }

  return DEFAULT_CONTROL_SIZE
}

function CheckIcon({ size }: Readonly<{ size: number }>) {
  return (
    <Block align='center' justify='center' size={size}>
      <Block
        style={{
          borderBottomWidth: CHECK_BORDER_WIDTH,
          borderColor: Colors['text.inverse'],
          borderLeftWidth: CHECK_BORDER_WIDTH,
          height: size * CHECK_MARK_HEIGHT_RATIO,
          transform: [
            { rotate: '-45deg' },
            { translateY: -size * CHECK_MARK_TRANSLATE_Y_RATIO }
          ],
          width: size * CHECK_MARK_WIDTH_RATIO
        }}
      />
    </Block>
  )
}

function IndeterminateIcon({ size }: Readonly<{ size: number }>) {
  return (
    <Block align='center' justify='center' size={size}>
      <Block
        backgroundColor='white'
        size={{
          height: INDETERMINATE_BAR_HEIGHT,
          width: size * INDETERMINATE_BAR_WIDTH_RATIO
        }}
      />
    </Block>
  )
}

function TextBlock(
  props: Readonly<{
    label?: React.ReactNode
    description?: React.ReactNode
    isDisabled?: boolean
    labelStyle?: TextStyle
    descriptionStyle?: TextStyle
  }>
) {
  const { label, description, isDisabled, labelStyle, descriptionStyle } = props

  const hasLabel = label !== undefined && label !== null
  const hasDescription = description !== undefined && description !== null

  if (!hasLabel && !hasDescription) {
    return null
  }

  let labelNode: React.ReactNode = null
  if (hasLabel) {
    labelNode =
      typeof label === 'string' ? (
        <Typography
          style={[
            styles.labelText,
            isDisabled && styles.disabledLabel,
            labelStyle
          ]}
        >
          {label}
        </Typography>
      ) : (
        label
      )
  }

  let descriptionNode: React.ReactNode = null
  if (hasDescription) {
    descriptionNode =
      typeof description === 'string' ? (
        <Typography
          style={[
            styles.descriptionText,
            isDisabled && styles.disabledDescription,
            descriptionStyle
          ]}
        >
          {description}
        </Typography>
      ) : (
        description
      )
  }

  return (
    <Block flexShrink={true}>
      {labelNode}
      {descriptionNode}
    </Block>
  )
}

function CheckBoxBox(
  props: Readonly<{
    boxSize: number
    iconSize: number
    borderColor: string
    backgroundColor: string
    boxStyle?: ViewStyle
    showIcon: boolean
    isIndeterminate?: boolean
    iconAnimStyle: ReturnType<typeof useAnimatedStyle>
  }>
) {
  const {
    backgroundColor,
    borderColor,
    boxSize,
    boxStyle,
    iconAnimStyle,
    iconSize,
    isIndeterminate,
    showIcon
  } = props

  return (
    <View
      style={[
        styles.boxBase,
        { backgroundColor, borderColor, height: boxSize, width: boxSize },
        boxStyle
      ]}
    >
      {showIcon ? (
        <Animated.View style={iconAnimStyle}>
          {isIndeterminate ? (
            <IndeterminateIcon size={iconSize} />
          ) : (
            <CheckIcon size={iconSize} />
          )}
        </Animated.View>
      ) : null}
    </View>
  )
}

function CheckBoxLayout(
  props: Readonly<{
    labelPosition: 'left' | 'right'
    wrapperStyle?: ViewStyle
    textBlock: React.ReactNode
    checkbox: React.ReactNode
  }>
) {
  const { labelPosition, wrapperStyle, textBlock, checkbox } = props

  return (
    <View style={[styles.wrapperInner, wrapperStyle]}>
      {labelPosition === 'left' ? textBlock : null}
      {checkbox}
      {labelPosition === 'right' ? textBlock : null}
    </View>
  )
}

export function CheckBox(props: Readonly<CheckBoxProps>) {
  const {
    label,
    description,
    labelPosition = 'right',
    controlSize: controlSizeProp,
    iconSize: iconSizeProp,
    isChecked,
    defaultChecked = false,
    isIndeterminate,
    isDisabled,
    isInvalid,
    onChange,
    boxStyle,
    wrapperStyle,
    labelStyle,
    descriptionStyle,
    style: pressableStyle,
    ...pressableProps
  } = props

  const { checked, setChecked } = useControllableChecked({
    defaultChecked,
    isChecked
  })

  const effectiveChecked = Boolean(checked && !isIndeterminate)
  const showIcon = Boolean(isIndeterminate || checked)

  const iconProgress = useSharedValue(showIcon ? 1 : 0)
  useEffect(() => {
    iconProgress.set(
      showIcon
        ? withSpring(1, { overshootClamping: true })
        : withTiming(0, { duration: ICON_HIDE_DURATION_MS })
    )
  }, [iconProgress, showIcon])

  const iconAnimStyle = useAnimatedStyle(() => {
    const p = iconProgress.get()
    return {
      opacity: p,
      transform: [{ scale: ICON_SCALE_BASE + ICON_SCALE_DELTA * p }]
    }
  })

  const boxSize = resolveControlSize({
    boxStyle,
    controlSize: controlSizeProp
  })
  const iconSize = Math.min(
    typeof iconSizeProp === 'number'
      ? iconSizeProp
      : Math.round(boxSize * DEFAULT_ICON_SIZE_RATIO),
    boxSize
  )

  const { backgroundColor, borderColor } = getBoxColors({
    isChecked: effectiveChecked,
    isDisabled,
    isInvalid
  })

  const handlePress = () => {
    if (isDisabled) {
      return
    }

    const next = getNextChecked({ checked, isIndeterminate })
    setChecked(next)
    onChange?.(next)
  }

  const hasText =
    (label !== undefined && label !== null) ||
    (description !== undefined && description !== null)

  const textBlock = (
    <TextBlock
      description={description}
      descriptionStyle={descriptionStyle}
      isDisabled={isDisabled}
      label={label}
      labelStyle={labelStyle}
    />
  )

  const checkbox = (
    <CheckBoxBox
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      boxSize={boxSize}
      boxStyle={boxStyle}
      iconAnimStyle={iconAnimStyle}
      iconSize={iconSize}
      isIndeterminate={isIndeterminate}
      showIcon={showIcon}
    />
  )

  return (
    <Pressable
      accessibilityLabel={getA11yLabel(label)}
      accessibilityRole='checkbox'
      accessibilityState={{
        checked: getA11yChecked({ checked, isIndeterminate }),
        disabled: isDisabled ?? false
      }}
      disabled={isDisabled}
      onPress={handlePress}
      style={mergePressableStyle({
        hasText,
        isDisabled,
        style: pressableStyle
      })}
      {...pressableProps}
    >
      {hasText ? (
        <CheckBoxLayout
          checkbox={checkbox}
          labelPosition={labelPosition}
          textBlock={textBlock}
          wrapperStyle={wrapperStyle}
        />
      ) : (
        checkbox
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  boxBase: {
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 2,
    justifyContent: 'center'
  },
  descriptionText: { color: Colors.gray_600, marginTop: 2 },
  disabledDescription: { color: Colors.gray_400 },
  disabledLabel: { color: Colors.gray_600 },
  disabledWrapper: { opacity: 0.6 },
  labelText: { color: Colors.gray_darkest },

  wrapperInner: { alignItems: 'center', flexDirection: 'row', gap: 8 },
  wrapperPressable: { alignSelf: 'flex-start' }
})
