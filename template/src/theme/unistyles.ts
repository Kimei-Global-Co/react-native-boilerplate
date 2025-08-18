import { StyleSheet } from 'react-native-unistyles'
import Colors from './colors'
import { Layout, Spacing } from './layout'

const lightTheme = {
  colors: {
    ...Colors,
    // accent: sharedColors.blood,
    backgroundColor: '#ffffff',
    typography: '#000000'
  },
  gap: (v: number) => v * 8,
  layout: { ...Layout },
  spacing: { ...Spacing }
}

const darkTheme = {
  colors: {
    ...Colors,
    // accent: sharedColors.barbie,
    backgroundColor: '#000000',
    typography: '#ffffff'
  },
  gap: (v: number) => v * 8,
  layout: { ...Layout },
  spacing: { ...Spacing }
}

const breakpoints = {
  lg: 800,
  md: 500,
  sm: 300,
  xl: 1200,
  xs: 0
}

type AppBreakpoints = typeof breakpoints
type AppThemes = {
  readonly light: typeof lightTheme
  readonly dark: typeof darkTheme
}

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  breakpoints,
  settings: {
    adaptiveThemes: true
  },
  themes: {
    dark: darkTheme,
    light: lightTheme
  }
})
