import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import { Block, Icon, Row, Text } from '@components'
import { navigate } from '@navigation/config/navigation-services'
import type { DevStackRoutes } from '@navigation/config/type'
import Colors from '@theme/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MENU_ITEMS } from './create-container'

export default function DevMenu(): React.JSX.Element {
  const { top } = useSafeAreaInsets()

  const renderItem = ({ item }: { item: string }): React.JSX.Element => (
    <TouchableOpacity
      onPress={() => navigate(item)}
      style={styles.itemContainer}
    >
      <Row between padding={15}>
        <Text size={16}>{item}</Text>
        <Icon name='right' size={22} type='antDesign' />
      </Row>
    </TouchableOpacity>
  )

  return (
    <Block style={[styles.container, { paddingTop: top }]}>
      <FlatList
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
  container: {
    backgroundColor: Colors.primary,
    flex: 1
  },
  itemContainer: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 4
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 60
  }
})
