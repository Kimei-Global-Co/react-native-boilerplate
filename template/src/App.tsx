import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StyleSheet } from 'react-native'

import MainNavigation from '@navigation/scenes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import I18nProvider from 'locale/i18n-provider'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import {
  initialWindowMetrics,
  SafeAreaProvider
} from 'react-native-safe-area-context'

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false
    },
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      structuralSharing: false
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
