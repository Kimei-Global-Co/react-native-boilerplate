import type {
  EventMapBase,
  NavigationState,
  ParamListBase,
  RouteConfig
} from '@react-navigation/native'
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export type BottomTabParamList = object

export type RootStackRoutes = {
  //Auth Rotues
  Login: undefined
}

export type RouteNames = keyof RootStackRoutes

export type NavigationParams<T extends RouteNames> =
  RootStackRoutes[T] extends undefined ? never : RootStackRoutes[T]

export type ScreenOptions<T extends ParamListBase, K extends object> = {
  [screenName: string]: RouteConfig<
    T,
    keyof T,
    NavigationState,
    K,
    EventMapBase,
    unknown
  >['options']
}

export function createEnum<T extends { [P in keyof T]: P }>(o: T): T {
  return o
}

export const screenOptions: ScreenOptions<
  RootStackRoutes,
  NativeStackNavigationOptions
> = {}
