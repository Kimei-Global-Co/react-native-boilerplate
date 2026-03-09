import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { MainNavigation } from '@navigation/scenes'
import { useMMKVDevTools } from '@rozenite/mmkv-plugin'
import { useNetworkActivityDevTools } from '@rozenite/network-activity-plugin'
import { useTanStackQueryDevTools } from '@rozenite/tanstack-query-plugin'
import { QueryClientProvider } from '@tanstack/react-query'
import { I18nProvider } from 'locale/i18n-provider'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import {
  initialWindowMetrics,
  SafeAreaProvider
} from 'react-native-safe-area-context'
import { useExpoUpdate } from 'shared/hooks/use-expo-updates'
import { appLanguageStorage } from 'shared/utils/persisted-state'
import { queryClient } from 'shared/utils/query-client'

export default function App(): React.JSX.Element {
  useExpoUpdate()
  useTanStackQueryDevTools(queryClient)
  useNetworkActivityDevTools()
  useMMKVDevTools({ storages: { language: appLanguageStorage } })

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <KeyboardProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <GestureHandlerRootView>
              <MainNavigation />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </KeyboardProvider>
      </I18nProvider>
    </QueryClientProvider>
  )
}
