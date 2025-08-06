import {
  commonScreens,
  devScreens,
  notLoggedInScreens
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
    <Navigator screenOptions={{ headerShown: false }}>
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
