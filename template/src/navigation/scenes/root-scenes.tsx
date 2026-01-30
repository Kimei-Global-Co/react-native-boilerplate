import {
  commonScreens,
  devScreens,
  notLoggedInScreens,
  ROUTES
} from '@navigation/config/routes'
import { type RootStackRoutes, screenOptions } from '@navigation/config/type'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Group, Navigator, Screen } =
  createNativeStackNavigator<RootStackRoutes>()

export default function RootScenes(): React.JSX.Element {
  const screens = {
    ...(__DEV__ ? devScreens : null),
    ...notLoggedInScreens,
    ...commonScreens
  }
  return (
    <Navigator
      /**
       * DevMenu is not included in RootStackRoutes, so we need to ignore the type check here.
       * This will be removed when the app is built for production.
       */
      //@ts-expect-error
      initialRouteName={__DEV__ ? 'DevMenu' : ROUTES.Login}
      screenOptions={{ headerShown: false }}
    >
      <Group>
        {Object.entries(screens).map(([name, component]: [string, unknown]) => (
          <Screen
            component={component as () => React.JSX.Element}
            key={name}
            name={name as keyof RootStackRoutes}
            options={screenOptions[name]}
          />
        ))}
      </Group>
    </Navigator>
  )
}
