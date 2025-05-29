import { DefaultTheme } from '@react-navigation/native'

import Colors from './colors'
import Fonts from './fonts'
import { Layout, Spacing } from './layout'

export const theme = {
  colors: { ...Colors },
  spacing: { ...Spacing },
  layout: { ...Layout },
  textVariants: { ...Fonts },
  cardVariants: {},
  borderRadius: {
    none: 0,
    xxs: 2,
    xs: 4,
    s: 6,
    m: 8,
    l: 10,
    _12: 12,
    xl: 33,
    xxl: 40,
    full: 99999,
    _60: 60
  },
  zIndices: { full: 9999 }
}

export type Theme = typeof theme & {
  NavigationTheme: typeof DefaultTheme & {
    colors: typeof DefaultTheme.colors & typeof Colors
  }
}

export const useTheme = (): Theme => ({
  ...theme,
  NavigationTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors
    }
  }
})

export default theme
