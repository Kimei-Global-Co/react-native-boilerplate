import { StyleSheet } from 'react-native'

import { Block } from '@components/ui/layouts/block/block.index'
import { Header } from '@components/ui/patterns/header/header.index'
import { ListItem } from '@components/ui/patterns/list-item/list-item.index'
import { Icon } from '@components/ui/primitives/icon/icon.index'
import { InfiniteScrollList } from '@components/ui/primitives/list/list.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { createContainer } from '../create-container'

interface IListItem {
  id: number
  title: string
  description: string
}

const SAMPLE_DATA: IListItem[] = Array.from({ length: 1000 }).map(
  (_, index) => ({
    description: `This is description for item ${index + 1}`,
    id: index + 1,
    title: `Item ${index + 1}`
  })
)

const ListComponent = (): React.JSX.Element => {
  const renderItem = ({ item }: { item: IListItem }): React.JSX.Element => (
    <ListItem divider pressable>
      <ListItem.Leading>
        <Block
          align='center'
          backgroundColor='gray_200'
          justify='center'
          padding={8}
          radius={6}
        >
          <Typography fontToken='font.heading.small'>{item.id}</Typography>
        </Block>
      </ListItem.Leading>
      <ListItem.Content>
        <Typography fontToken='font.heading.small'>{item.title}</Typography>
        <Typography color='gray_400' margin={{ top: 4 }}>
          {item.description}
        </Typography>
      </ListItem.Content>
      <ListItem.Trailing>
        <Icon color='gray_400' name='chevron-right' size={20} type='feather' />
      </ListItem.Trailing>
    </ListItem>
  )

  return (
    <Block flex>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Image Component</Header.Title>
        </Header.Section>
      </Header>
      <InfiniteScrollList<IListItem>
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
  listContainer: {
    padding: 16
  }
})
