import { useCallback } from 'react'
import {
  FlatList,
  type ListRenderItemInfo,
  StyleSheet,
  View
} from 'react-native'

import { Block } from '../block'
import type { BaseItem, InfiniteScrollListProps } from './type'

const InfiniteScrollListComponent = <T extends BaseItem>(
  {
    style,
    renderItem: propRenderItem,
    numColumns = 1,
    containerStyle,
    LoadingComponent,
    isLoading,
    data,
    onEndReached,
    ...rest
  }: InfiniteScrollListProps<T>,
  ref: React.Ref<FlatList<T>>
): React.JSX.Element => {
  const renderItem = useCallback(
    (info: ListRenderItemInfo<T>) => {
      if (!propRenderItem) return null

      if (numColumns > 1) {
        return <View style={styles.gridItem}>{propRenderItem(info)}</View>
      }
      return propRenderItem(info)
    },
    [numColumns, propRenderItem]
  )

  const keyExtractor = (item: T): string => item.id.toString()

  return (
    <Block style={[styles.container, containerStyle]}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        onEndReached={onEndReached}
        ref={ref}
        renderItem={renderItem}
        style={[styles.list, style]}
        {...rest}
      />
      {isLoading && LoadingComponent && <LoadingComponent />}
    </Block>
  )
}

export const InfiniteScrollList = InfiniteScrollListComponent as <
  T extends BaseItem
>(
  props: InfiniteScrollListProps<T> & { ref?: React.Ref<FlatList<T>> }
) => React.ReactElement

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gridItem: {
    flex: 1
  },
  list: {
    flex: 1
  }
})
