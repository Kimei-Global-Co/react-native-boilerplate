import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import { Block, Icon, Row, Text } from '@components'
import type { DevStackRoutes } from '@navigation/config/type'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import Colors from '@theme/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { MENU_ITEMS } from './create-container'

export default function DevMenu(): React.JSX.Element {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProp<DevStackRoutes>>()

  const renderItem = ({ item }: { item: string }): React.JSX.Element => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate(item as keyof DevStackRoutes)}>
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
    flex: 1,
    backgroundColor: Colors.primary
  },
  listContainer: {
    padding: 10,
    paddingBottom: 60,
    flexGrow: 1
  },
  itemContainer: {
    marginBottom: 10,
    backgroundColor: Colors.white,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3
  }
})
