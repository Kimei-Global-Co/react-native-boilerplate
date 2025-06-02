import React, { JSX, forwardRef, useCallback } from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native'

import { Block } from '../block'
import { BaseItem, InfiniteScrollListProps } from './type'

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
): JSX.Element => {
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
        ref={ref}
        data={data}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        renderItem={renderItem}
        style={[styles.list, style]}
        onEndReached={onEndReached}
        {...rest}
      />
      {isLoading && LoadingComponent && <LoadingComponent />}
    </Block>
  )
}

export const InfiniteScrollList = forwardRef(InfiniteScrollListComponent) as <
  T extends BaseItem
>(
  props: InfiniteScrollListProps<T> & { ref?: React.Ref<FlatList<T>> }
) => React.ReactElement

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  gridItem: {
    flex: 1
  }
})
