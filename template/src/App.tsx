import { GestureHandlerRootView } from 'react-native-gesture-handler'

import MainNavigation from '@navigation/scenes'
import { useMMKVDevTools } from '@rozenite/mmkv-plugin'
import { useNetworkActivityDevTools } from '@rozenite/network-activity-plugin'
import { useTanStackQueryDevTools } from '@rozenite/tanstack-query-plugin'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@theme/layout'
import I18nProvider from 'locale/i18n-provider'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import {
  initialWindowMetrics,
  SafeAreaProvider
} from 'react-native-safe-area-context'
import { useExpoUpdate } from 'shared/hooks/use-expo-updates'

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
  useExpoUpdate()
  useTanStackQueryDevTools(queryClient)
  useNetworkActivityDevTools()
  useMMKVDevTools()
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <KeyboardProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <GestureHandlerRootView style={Layout.flex_1}>
              <MainNavigation />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </KeyboardProvider>
      </I18nProvider>
    </QueryClientProvider>
  )
}
