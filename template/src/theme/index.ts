import { DefaultTheme } from '@react-navigation/native'
import Colors from './colors'
import Fonts from './fonts'
import { Layout, Spacing } from './layout'

export const theme = {
  borderRadius: {
    _12: 12,
    _60: 60,
    full: 99999,
    l: 10,
    m: 8,
    none: 0,
    s: 6,
    xl: 33,
    xs: 4,
    xxl: 40,
    xxs: 2
  },
  cardVariants: {},
  colors: { ...Colors },
  layout: { ...Layout },
  spacing: { ...Spacing },
  textVariants: { ...Fonts },
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
