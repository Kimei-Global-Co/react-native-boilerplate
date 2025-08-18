import 'react-native-gesture-handler'

import { registerRootComponent } from 'expo'
import { enableFreeze, enableScreens } from 'react-native-screens'
import App from './src/App'
import './src/theme/unistyles'

enableScreens(true)
enableFreeze(true)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
