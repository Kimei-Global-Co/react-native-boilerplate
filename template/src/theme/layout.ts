import type { ViewStyle } from 'react-native'

export const Layout = {
  col: {
    flexDirection: 'column'
  },
  colReverse: {
    flexDirection: 'column-reverse'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row'
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  itemsCenter: {
    alignItems: 'center'
  },
  itemsStart: {
    alignItems: 'flex-start'
  },
  itemsStretch: {
    alignItems: 'stretch'
  },
  itemsEnd: {
    alignItems: 'flex-end'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyAround: {
    justifyContent: 'space-around'
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  justifyStart: {
    justifyContent: 'flex-start'
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
  marginLeftAuto: {
    marginLeft: 'auto'
  },
  /* Backgrounds */
  bg_primary: {
    backgroundColor: '#fff'
  },
  bg_gray888: {
    backgroundColor: '#888888'
  },
  bg_black2A: {
    backgroundColor: '#2A2A2A'
  },
  transparent_background: {
    backgroundColor: 'transparent'
  },
  /* Sizes Layouts */
  flex_none: {
    flex: 0
  },
  flex_1: {
    flex: 1
  },
  flex_grow: {
    flexGrow: 1
  },
  fullWidth: {
    width: '100%'
  },
  fullHeight: {
    height: '100%'
  },
  /* Positions */
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  },
  height8: {
    height: 8
  },
  top0: {
    top: 0
  },
  bottom0: {
    bottom: 0
  },
  left0: {
    left: 0
  },
  right0: {
    right: 0
  },
  z1: {
    zIndex: 1
  },
  z10: {
    zIndex: 10
  },
  mx10: {
    marginHorizontal: 10
  },
  mx20: {
    marginHorizontal: 20
  },
  px10: {
    paddingHorizontal: 10
  }
} as const satisfies Record<string, ViewStyle>

export const Spacing = {
  none: 0,
  xxs: 1,
  xs: 2,
  x: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
  xxl: 2 * 40,
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
  _440: 440
} as const satisfies Record<string, number>
