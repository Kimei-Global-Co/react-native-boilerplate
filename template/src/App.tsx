import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StyleSheet } from 'react-native'

import MainNavigation from '@navigation/scenes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import I18nProvider from 'locale/i18n-provider'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      structuralSharing: false
    },
    mutations: {
      retry: false
    }
  }
})

export default function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <KeyboardProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <GestureHandlerRootView style={styles.container}>
              <MainNavigation />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </KeyboardProvider>
      </I18nProvider>
    </QueryClientProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
