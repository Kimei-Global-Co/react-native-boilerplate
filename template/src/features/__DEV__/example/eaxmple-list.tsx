import { StyleSheet } from 'react-native'

import { Block, Header, Typography } from '@components'
import { InfiniteScrollList } from '@components/base/list'
import { createContainer } from '../create-container'

interface ListItem {
  id: number
  title: string
  description: string
}
const SAMPLE_DATA: ListItem[] = Array.from({ length: 1000 }).map(
  (_, index) => ({
    description: `This is description for item ${index + 1}`,
    id: index + 1,
    title: `Item ${index + 1}`
  })
)

const ListComponent = (): React.JSX.Element => {
  const renderItem = ({ item }: { item: ListItem }): React.JSX.Element => (
    <Block
      backgroundColor='gray_100'
      margin={{ bottom: 8 }}
      padding={16}
      radius={8}
    >
      <Typography fontType='bold' size={16}>
        {item.title}
      </Typography>
      <Typography color='gray_400' margin={{ top: 4 }}>
        {item.description}
      </Typography>
    </Block>
  )

  return (
    <Block flex={1}>
      <Header isBack title='Image Component' />
      <InfiniteScrollList<ListItem>
        contentContainerStyle={styles.listContainer}
        data={SAMPLE_DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </Block>
  )
}

const Root = createContainer(ListComponent, 'List')

export default function ExampleList(): React.JSX.Element {
  return <Root />
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  listContainer: {
    padding: 16
  }
})
