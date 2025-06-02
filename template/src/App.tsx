import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { useState } from 'react'
import { StyleSheet } from 'react-native'

import Accordion from '@components/base/accordion'
import { Header } from '@components/base/header'
import { Text } from '@components/base/text'
import { TextInput } from '@components/base/text-input'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const [search, setSearch] = useState('')

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <KeyboardProvider>
          <GestureHandlerRootView style={styles.flex}>
            <Accordion.Root variant='bordered'>
              <Accordion.Header>
                <Text>Accordion Header</Text>
              </Accordion.Header>
              <Accordion.Content>
                <Text>This is the content of the accordion.</Text>
              </Accordion.Content>
            </Accordion.Root>
            <Accordion.Root>
              <Accordion.Header>
                <Text>Accordion Header</Text>
              </Accordion.Header>
              <Accordion.Content>
                <Text>This is the content of the accordion.</Text>
              </Accordion.Content>
            </Accordion.Root>
            <Header showBack={false} subtitle='Online' title='John Doe' />
            <TextInput label='Username' value={value} onChangeText={setValue} />
            <TextInput
              required
              helper='Must be at least 8 characters'
              label='Password'
              mode='password'
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              clearable
              label='Search'
              placeholder='Search items...'
              value={search}
              onChangeText={setSearch}
            />
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
  listContent: {
    padding: 16
  }
})
