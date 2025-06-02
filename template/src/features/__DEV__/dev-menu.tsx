import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

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
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={Object.keys(MENU_ITEMS)}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    marginBottom: 10
  },
  card: {
    borderRadius: 8,
    elevation: 2
  },
  cardContent: {
    padding: 15
  },
  itemText: {
    fontSize: 18,
    color: '#333'
  }
})
