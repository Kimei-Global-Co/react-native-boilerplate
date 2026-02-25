import type { ViewStyle } from 'react-native'
import { Dimensions, Platform, StyleSheet } from 'react-native'

import type { BlockProps } from '@components/ui/layouts/block/block.type'
import Colors from '@theme/colors'
import get from 'lodash.get'
import type { EdgeInsets } from 'react-native-safe-area-context'
import type {
  BorderProps,
  BorderType,
  DefaultStyleProps,
  GutterProps,
  RadiusProps,
  SafeAreaInsetType
} from '../types/stylesheet.type'

export const clamp = (
  value: number,
  lowerBound: number,
  upperBound: number
) => {
  'worklet'
  return Math.min(Math.max(lowerBound, value), upperBound)
}

export const snapPoint = (
  value: number,
  velocity: number,
  points: ReadonlyArray<number>
): number => {
  'worklet'
  const point = value + 0.2 * velocity
  const deltas = points.map((p) => Math.abs(point - p))
  const minDelta = Math.min.apply(null, deltas)
  return points.find((p) => Math.abs(point - p) === minDelta) ?? points[0]
}

export function getColor(
  disabled: boolean | undefined,
  color:
    | keyof typeof Colors
    | { active: keyof typeof Colors; inActive: string },
  disabledColor: string
): { active: string; inActive: string } {
  if (disabled) {
    return { active: disabledColor, inActive: disabledColor }
  }

  if (typeGuards(color, 'string')) {
    return {
      active: Colors[color] ?? color,
      inActive: Colors[color] ?? color
    }
  }
  return {
    active: Colors[color.active] ?? color.active,
    inActive: Colors[color.inActive] ?? color.inActive
  }
}

export const handleGutter = (
  type: 'padding' | 'margin',
  gutter: number | GutterProps
): ViewStyle => {
  if (typeGuards(gutter, 'number')) {
    return {
      [type]: gutter
    }
  }
  const padding: Record<string, number> = {}
  const gutterKeys = Object.keys(gutter) as Array<keyof GutterProps>
  gutterKeys.forEach((key) => {
    const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1)
    if (gutter[key] !== undefined) {
      padding[`${type}${capFirstLetter}`] = gutter[key]
    }
  })
  return padding
}

export const handleRadius = (radius: number | RadiusProps): ViewStyle => {
  if (typeGuards(radius, 'number')) {
    return {
      borderRadius: radius
    }
  }
  const borderRadius: Record<string, number> = {}
  const gutterKeys = Object.keys(radius) as Array<keyof RadiusProps>
  gutterKeys.forEach((key) => {
    const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1)
    if (radius[key] !== undefined) {
      borderRadius[`border${capFirstLetter}Radius`] = radius[key]
    }
  })
  return borderRadius
}

export const handleSquare = (
  number: number
): { width: number; height: number } => {
  return {
    height: number,
    width: number
  }
}

export const handleRound = (
  number: number
): { width: number; height: number; borderRadius: number } => {
  return {
    borderRadius: number / 2,
    height: number,
    width: number
  }
}

const getPaddingFromGutterProps = (
  inset: SafeAreaInsetType,
  padding: GutterProps
): number => {
  const specificPadding = padding?.[inset] ?? 0
  if (specificPadding) {
    return specificPadding
  }

  const isVertical = inset === 'top' || inset === 'bottom'
  return isVertical ? (padding.vertical ?? 0) : (padding.horizontal ?? 0)
}

const getInitPadding = (
  inset: SafeAreaInsetType,
  padding?: number | GutterProps
): number => {
  if (!padding) {
    return 0
  }

  return typeGuards(padding, 'number')
    ? padding
    : getPaddingFromGutterProps(inset, padding)
}

export const handleInset = (
  props: BlockProps,
  safe: EdgeInsets,
  padding?: number | GutterProps
): ViewStyle | undefined => {
  if (!props.inset) {
    return
  }

  if (typeof props.inset === 'string') {
    const capitalize =
      props.inset.charAt(0).toUpperCase() + props.inset.slice(1)
    const initPadding = getInitPadding(props.inset, padding)
    return {
      [`padding${capitalize}`]: safe[props.inset] + initPadding
    }
  }

  const paddingStyles: Record<string, number> = {}
  for (const element of props.inset) {
    const capitalize = element.charAt(0).toUpperCase() + element.slice(1)
    const initPadding = getInitPadding(element, padding)
    paddingStyles[`padding${capitalize}`] = safe[element] + initPadding
  }
  return paddingStyles
}

export const handleBorder = (border: BorderProps | BorderType): ViewStyle => {
  if ('width' in border) {
    return { borderColor: Colors[border.color], borderWidth: border.width }
  }

  const borderKeys = Object.keys(border) as Array<keyof BorderType>
  const borderBox: Record<string, string | number | undefined> = {}
  borderKeys.forEach((key) => {
    const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1)
    if (border[key] !== undefined) {
      borderBox[`border${capFirstLetter}Width`] = border[key]?.width
      borderBox[`border${capFirstLetter}Color`] = border[key]?.color
    }
  })
  return borderBox
}

export const createDefaultStyle = (props: DefaultStyleProps): ViewStyle => {
  return StyleSheet.flatten<ViewStyle>([
    props.flex !== undefined &&
      props.flex !== false && {
        flex: typeGuards(props.flex, 'number') ? props.flex : 1
      },
    props.flexGrow !== undefined &&
      props.flexGrow !== false && {
        flexGrow: typeGuards(props.flexGrow, 'number') ? props.flexGrow : 1
      },
    props.flexShrink !== undefined &&
      props.flexShrink !== false && {
        flexShrink: typeGuards(props.flexShrink, 'number')
          ? props.flexShrink
          : 1
      },
    props.wrap && { flexWrap: 'wrap' },
    props.alignSelf && { alignSelf: props.alignSelf },
    props.radius !== undefined && handleRadius(props.radius),
    props.borderStyle !== undefined && { borderStyle: props.borderStyle },
    props.border && handleBorder(props.border),
    props.square !== undefined && handleSquare(props.square),
    props.round !== undefined && handleRound(props.round),
    props.opacity !== undefined && { opacity: props.opacity }
  ])
}

export const createSizeStyle = (size: BlockProps['size']) => {
  if (typeGuards(size, 'number')) {
    return { height: size, width: size }
  }

  if (typeGuards(size, 'object')) {
    return {
      height: size.height ?? 0,
      width: size.width ?? 0
    }
  }

  return {}
}

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('screen')

export const STALE = {
  HOURS: {
    FIVE: 1e3 * 60 * 60 * 5,
    ONE: 1e3 * 60 * 60
  },
  INFINITY: Infinity,
  MINUTES: {
    FIFTEEN: 1e3 * 60 * 15,
    FIVE: 1e3 * 60 * 5,
    ONE: 1e3 * 60,
    TEN: 1e3 * 60 * 10,
    THIRTY: 1e3 * 60 * 30
  },
  SECONDS: {
    FIFTEEN: 1e3 * 15,
    THIRTY: 1e3 * 30
  }
}

export const HIT_SLOP = {
  8: {
    bottom: 8,
    left: 8,
    right: 8,
    top: 8
  },
  10: {
    bottom: 10,
    left: 10,
    right: 10,
    top: 10
  },
  20: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 20
  }
}

function when<T>(condition: boolean, value: T): T | undefined
function when<T, F>(condition: boolean, value: T, fallback: F): T | F
function when<T, F>(
  condition: boolean,
  value: T,
  fallback?: F
): T | F | undefined {
  'worklet'
  if (condition) {
    return value
  }
  if (fallback !== undefined) {
    return fallback as T
  }
  return undefined
}
export { when }

function typeGuards(x: unknown): x is string
function typeGuards(x: unknown, type: 'string'): x is string
function typeGuards(x: unknown, type: 'number'): x is number
function typeGuards(x: unknown, type: 'undefined'): x is undefined
function typeGuards(x: unknown, type: 'object'): x is object
function typeGuards(x: unknown, type: 'null'): x is null
function typeGuards(
  x: unknown,
  type: 'function'
): x is (...args: unknown[]) => unknown
function typeGuards(
  x: unknown,
  type:
    | 'string'
    | 'number'
    | 'undefined'
    | 'object'
    | 'null'
    | 'function'
    | 'array' = 'string'
): boolean {
  switch (type) {
    case 'string':
      return typeof x === 'string'
    case 'number':
      return typeof x === 'number'
    case 'undefined':
      return x === undefined
    case 'object':
      return x !== null && typeof x === 'object' && !Array.isArray(x)
    case 'array':
      return Array.isArray(x)
    case 'null':
      return x === null
    case 'function':
      return typeof x === 'function'
    default:
      return false
  }
}

export { typeGuards }

function isResponseError(error: unknown, type: 'network'): boolean
function isResponseError(error: unknown, type: 'server'): boolean
function isResponseError(error: unknown, type: 'network' | 'server'): boolean {
  const str = String(error)

  if (type === 'network') {
    return (
      str.includes('Abort') ||
      str.includes('Network request failed') ||
      str.includes('Failed to fetch') ||
      str.includes('Network Error') ||
      str.includes('timeout exceeded')
    )
  }

  if (type === 'server') {
    return str.includes('status code 502') || str.includes('status code 500')
  }

  return false
}

export { isResponseError }

export const Helper = {
  getValue: <T, K extends keyof T>(
    obj: T,
    key: K,
    defaultValue?: T[K]
  ): T[K] => {
    return get(obj, key, defaultValue)
  },
  isAndroid: (): boolean => {
    return Platform.OS === 'android'
  },

  isIOS: (): boolean => {
    return Platform.OS === 'ios'
  }
}
