import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  StackActions
} from '@react-navigation/native'
import { ROUTES } from './routes'
import type { NavigationParams, RootStackRoutes, RouteNames } from './type'

export const navigationRef = createNavigationContainerRef<RootStackRoutes>()

export function navigate<T extends RouteNames>(
  name: T,
  params?: NavigationParams<T>
): void {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(CommonActions.navigate(name, params))
  }
}

export function goBack(): void {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack()
  } else {
    navigateAndReset([{ name: ROUTES.Signin }], 0)
  }
}

export function navigateAndReset<T extends RouteNames>(
  routes: {
    name: T
    params?: NavigationParams<T>
  }[],
  index: number
): void {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes
    })
  )
}

export function push<T extends RouteNames>(
  name: T,
  params?: NavigationParams<T>
): void {
  navigationRef.current?.dispatch(StackActions.push(name, params))
}

export function replace<T extends RouteNames>(
  name: T,
  params?: NavigationParams<T>
): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function popToTop(): void {
  navigationRef.current?.dispatch(StackActions.popToTop())
}

export function pop(count?: number): void {
  navigationRef.current?.dispatch(StackActions.pop(count))
}

export function closeDrawer(): void {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer())
}

export function openDrawer(): void {
  navigationRef.current?.dispatch(DrawerActions.openDrawer())
}

export default {
  closeDrawer,
  navigate,
  navigationRef,
  openDrawer,
  pop,
  popToTop,
  push,
  replace
}
