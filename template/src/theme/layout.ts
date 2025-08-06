import type { ViewStyle } from 'react-native'

export const Layout = {
  absolute: {
    position: 'absolute'
  },
  alignSelfCenter: {
    alignSelf: 'center'
  },
  alignSelfEnd: {
    alignSelf: 'flex-end'
  },
  alignSelfStart: {
    alignSelf: 'flex-start'
  },
  bg_black2A: {
    backgroundColor: '#2A2A2A'
  },
  bg_gray888: {
    backgroundColor: '#888888'
  },
  /* Backgrounds */
  bg_primary: {
    backgroundColor: '#fff'
  },
  bottom0: {
    bottom: 0
  },
  col: {
    flexDirection: 'column'
  },
  colReverse: {
    flexDirection: 'column-reverse'
  },
  flex_1: {
    flex: 1
  },
  flex_grow: {
    flexGrow: 1
  },
  /* Sizes Layouts */
  flex_none: {
    flex: 0
  },
  fullHeight: {
    height: '100%'
  },
  fullWidth: {
    width: '100%'
  },
  height8: {
    height: 8
  },
  itemsCenter: {
    alignItems: 'center'
  },
  itemsEnd: {
    alignItems: 'flex-end'
  },
  itemsStart: {
    alignItems: 'flex-start'
  },
  itemsStretch: {
    alignItems: 'stretch'
  },
  justifyAround: {
    justifyContent: 'space-around'
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  left0: {
    left: 0
  },
  marginLeftAuto: {
    marginLeft: 'auto'
  },
  mx10: {
    marginHorizontal: 10
  },
  mx20: {
    marginHorizontal: 20
  },
  px10: {
    paddingHorizontal: 10
  },
  /* Positions */
  relative: {
    position: 'relative'
  },
  right0: {
    right: 0
  },
  row: {
    flexDirection: 'row'
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  top0: {
    top: 0
  },
  transparent_background: {
    backgroundColor: 'transparent'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  z1: {
    zIndex: 1
  },
  z10: {
    zIndex: 10
  }
} as const satisfies Record<string, ViewStyle>

export const Spacing = {
  _3: 3,
  _5: 5,
  _6: 6,
  _7: 7,
  _10: 10,
  _12: 12,
  _13: 13,
  _14: 14,
  _15: 15,
  _16: 16,
  _18: 18,
  _20: 20,
  _22: 22,
  _23: 23,
  _24: 24,
  _25: 25,
  _26: 26,
  _28: 28,
  _29: 29,
  _30: 30,
  _32: 32,
  _33: 33,
  _35: 35,
  _36: 36,
  _37: 37,
  _38: 38,
  _39: 39,
  _40: 40,
  _41: 41,
  _42: 42,
  _43: 43,
  _44: 44,
  _45: 45,
  _47: 47,
  _48: 48,
  _50: 50,
  _55: 55,
  _58: 58,
  _60: 60,
  _64: 64,
  _65: 65,
  _70: 70,
  _80: 80,
  _85: 85,
  _90: 90,
  _100: 100,
  _120: 120,
  _130: 130,
  _140: 140,
  _150: 150,
  _155: 155,
  _157: 157,
  _178: 178,
  _440: 440,
  l: 24,
  m: 16,
  none: 0,
  s: 8,
  x: 4,
  xl: 40,
  xs: 2,
  xxl: 2 * 40,
  xxs: 1
} as const satisfies Record<string, number>
