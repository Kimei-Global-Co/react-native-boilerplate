import { Dimensions, Platform } from 'react-native'

import type { BlockProps } from '@components/base/block/type'
import type { IconComponentProps } from '@components/base/icon/type'
import Colors from '@theme/colors'
import get from 'lodash.get'
import type { EdgeInsets } from 'react-native-safe-area-context'
import type {
  BorderProps,
  BorderType,
  GutterProps,
  RadiusProps,
  SafeAreaInsetType
} from './types'

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const handleGutter = (
  type: 'padding' | 'margin',
  gutter: number | GutterProps
): { [key: string]: number } => {
  if (typeGuards(gutter, 'number')) {
    return {
      [type]: gutter
    }
  }
  const padding: { [key: string]: number } = {}
  const gutterKeys = Object.keys(gutter) as Array<keyof GutterProps>
  gutterKeys.forEach((key) => {
    const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1)
    if (gutter[key] !== undefined) {
      padding[`${type}${capFirstLetter}`] = gutter[key]
    }
  })
  return padding
}

export const handleRadius = (
  radius: number | RadiusProps
): {
  [key: string]: number
} => {
  if (typeGuards(radius, 'number')) {
    return {
      borderRadius: radius
    }
  }
  const borderRadius: { [key: string]: number } = {}
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
  if (!padding) return 0

  return typeGuards(padding, 'number')
    ? padding
    : getPaddingFromGutterProps(inset, padding)
}

export const handleInset = (
  props: BlockProps,
  safe: EdgeInsets,
  padding?: number | GutterProps
):
  | {
      [x: string]: number
    }
  | undefined => {
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

  const paddingStyles: { [key: string]: number } = {}
  for (const element of props.inset) {
    const capitalize = element.charAt(0).toUpperCase() + element.slice(1)
    const initPadding = getInitPadding(element, padding)
    paddingStyles[`padding${capitalize}`] = safe[element] + initPadding
  }
  return paddingStyles
}

export const handleBorder = (
  border: BorderProps | BorderType
): {
  [key: string]: string | number | undefined
} => {
  if ('width' in border) {
    return { borderColor: Colors[border.color], borderWidth: border.width }
  }

  const borderKeys = Object.keys(border) as Array<keyof BorderType>
  const borderBox: { [key: string]: number | string | undefined } = {}
  borderKeys.forEach((key) => {
    const capFirstLetter = key.charAt(0).toUpperCase() + key.slice(1)
    if (border[key] !== undefined) {
      borderBox[`border${capFirstLetter}Width`] = border[key]?.width
      borderBox[`border${capFirstLetter}Color`] = border[key]?.color
    }
  })
  return borderBox
}

export const createDefaultStyle = (props: {
  [key: string]: unknown
}): unknown[] => [
  props.flex && { flex: typeGuards(props.flex, 'number') ? props.flex : 1 },
  props.flexGrow && {
    flexGrow: typeGuards(props.flexGrow, 'number') ? props.flexGrow : 1
  },
  props.flexShrink && {
    flexShrink: typeGuards(props.flexShrink, 'number') ? props.flexShrink : 1
  },
  typeGuards(props.square, 'number') && handleSquare(props.square),
  typeGuards(props.round, 'number') && handleRound(props.round),
  props.radius && handleRadius(props.radius),
  props.borderStyle && { borderStyle: props.borderStyle },
  props.border && handleBorder(props.border),
  props.wrap && { flexWrap: 'wrap' },
  props.alignSelf && { alignSelf: props.alignSelf },
  typeGuards(props.opacity, 'number') && { opacity: props.opacity }
]

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

function typeGuards(x: unknown): x is string
function typeGuards(x: unknown, type: 'string'): x is string
function typeGuards(x: unknown, type: 'number'): x is number
function typeGuards(x: unknown, type: 'undefined'): x is undefined
function typeGuards(x: unknown, type: 'object'): x is object
function typeGuards(x: unknown, type: 'null'): x is null
function typeGuards(
  x: unknown,
  type?: 'string' | 'number' | 'undefined' | 'object' | 'null'
): boolean {
  switch (type) {
    case 'string':
      return typeof x === 'string'
    case 'number':
      return typeof x === 'number'
    case 'undefined':
      return x === undefined
    case 'object':
      return typeof x === 'object'
    case 'null':
      return x === null
    default:
      return false
  }
}

export { typeGuards }

function isResponseError(error: unknown, type: 'network'): boolean
function isResponseError(error: unknown, type: 'server'): boolean
function isResponseError(error: unknown, type: 'network' | 'server'): boolean {
  const str = String(error)

  if (type === 'network')
    return (
      str.includes('Abort') ||
      str.includes('Network request failed') ||
      str.includes('Failed to fetch') ||
      str.includes('Network Error') ||
      str.includes('timeout exceeded')
    )

  if (type === 'server')
    return (
      str.includes('Request failed with status code 502') ||
      str.includes('Request failed with status code 500')
    )

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

  isIcon(
    icon: IconComponentProps | React.ReactNode
  ): icon is IconComponentProps {
    return (icon as IconComponentProps)?.name !== undefined
  },
  isIOS: (): boolean => {
    return Platform.OS === 'ios'
  }
}
