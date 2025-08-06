import { StyleSheet, TouchableOpacity } from 'react-native'

import { Block, Icon, Row, Typography } from '@components'
import { InfiniteScrollList } from '@components/base/list'
import { navigate } from '@navigation/config/navigation-services'
import Colors from '@theme/colors'
import { MENU_ITEMS } from './create-container'
export default function DevMenu(): React.JSX.Element {
  const renderItem = ({ item }: { item: string }): React.JSX.Element => (
    <TouchableOpacity
      // @ts-expect-error: Dev menu routes are not part of main navigation types
      onPress={() => navigate(item)}
      style={styles.itemContainer}
    >
      <Row between padding={15}>
        <Typography size={16}>{item}</Typography>
        <Icon name='right' size={22} type='antDesign' />
      </Row>
    </TouchableOpacity>
  )

  return (
    <Block backgroundColor='primary' flex inset='top'>
      <InfiniteScrollList
        contentContainerStyle={styles.listContainer}
        data={Object.keys(MENU_ITEMS)}
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
    marginBottom: 10
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 60
  }
})
