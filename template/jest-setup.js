import 'react-native-gesture-handler/jestSetup'

import { configure } from 'reassure'

import './__tests__/__mocks__/react-native-safe-area-context'

configure({ testingLibrary: 'react-native' })
