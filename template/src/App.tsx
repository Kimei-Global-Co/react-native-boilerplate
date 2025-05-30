import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StyleSheet } from 'react-native'

import { Block } from '@components/base/block'
import { InfiniteScrollList } from '@components/base/list'
import { Text } from '@components/base/text'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

interface ListItem {
  id: number
  title: string
  description: string
}
const SAMPLE_DATA: ListItem[] = Array.from({ length: 50 }).map((_, index) => ({
  id: index + 1,
  title: `Item ${index + 1}`,
  description: `This is description for item ${index + 1}`
}))
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
  const renderItem = ({ item }: { item: ListItem }) => (
    <Block
      backgroundColor='gray_100'
      margin={{ bottom: 8 }}
      padding={16}
      radius={8}>
      <Text fontType='bold' size={16}>
        {item.title}
      </Text>
      <Text color='gray_400' margin={{ top: 4 }}>
        {item.description}
      </Text>
    </Block>
  )

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <KeyboardProvider>
          <GestureHandlerRootView style={styles.flex}>
            <Block backgroundColor='white' flex={1}>
              <Block flex={1}>
                <InfiniteScrollList<ListItem>
                  contentContainerStyle={styles.listContent}
                  data={SAMPLE_DATA}
                  renderItem={renderItem}
                />
              </Block>
            </Block>
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
