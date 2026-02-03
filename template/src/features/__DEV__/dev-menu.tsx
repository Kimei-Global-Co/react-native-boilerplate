import { StyleSheet } from 'react-native'

import { Block } from '@components/ui/layouts/block/block.index'
import { Row } from '@components/ui/layouts/row/row.index'
import { Spacer } from '@components/ui/layouts/spacer/spacer.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { InfiniteScrollList } from '@components/ui/primitives/list/list.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { navigate } from '@navigation/config/navigation-services'
import Colors from '@theme/colors'
import { MENU_ITEMS } from './create-container'

export default function DevMenu(): React.JSX.Element {
  const renderItem = ({ item }: { item: string }): React.JSX.Element => (
    <Button
      // @ts-expect-error: Dev menu routes are not part of main navigation types
      onPress={() => navigate(item)}
      style={styles.itemContainer}
    >
      <Row between padding={15}>
        <Typography size={16}>{item}</Typography>
        <Button.Icon name='right' size={22} type='antDesign' />
      </Row>
    </Button>
  )

  const renderItemSeparator = () => <Spacer y={10} />

  return (
    <Block backgroundColor='primary' flex inset='top'>
      <InfiniteScrollList
        contentContainerStyle={styles.listContainer}
        data={Object.keys(MENU_ITEMS)}
        ItemSeparatorComponent={renderItemSeparator}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15);',
    height: 50
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 60
  }
})
