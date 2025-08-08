import type { LinkingOptions } from '@react-navigation/native'

export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  config: {
    screens: {
      Login: 'login',
      NotFound: '*'
    }
  },
  prefixes: ['boilerplate://', 'https://boilerplate.vn'] // modify this to use for deep linking
}
