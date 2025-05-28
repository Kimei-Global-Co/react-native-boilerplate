import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StyleSheet, Text, View } from 'react-native'

import { Block } from '@components/base/block'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Colors from '@theme/colors'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <KeyboardProvider>
          <GestureHandlerRootView style={styles.flex}>
            <View style={styles.container}>
              <Block backgroundColor='rose_50' padding={20} radius={10}>
                <Text>Open up App.tsx to start working on your app!</Text>
              </Block>
            </View>
          </GestureHandlerRootView>
        </KeyboardProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
