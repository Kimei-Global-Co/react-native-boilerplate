import Block from '@components/ui/layouts/block/block.index'
import EmptyView from '@components/ui/patterns/empty-view'
import { FlashList, type ListRenderItemInfo } from '@shopify/flash-list'
import type { InfiniteScrollListProps } from './list.type'

function FlashListComponent<T>({
  style,
  renderItem: propRenderItem,
  ListEmptyComponent,
  numColumns,
  ref,
  ...rest
}: InfiniteScrollListProps<T>) {
  const onLoadListener = ({ elapsedTimeInMs }: { elapsedTimeInMs: number }) => {
    console.info('init load', elapsedTimeInMs)
  }

  const renderItem = (props: ListRenderItemInfo<T>) => {
    if (!propRenderItem) {
      return null
    }

    return propRenderItem(props)
  }

  const ListEmpty = ListEmptyComponent ?? <EmptyView />

  if (style) {
    return (
      <Block size={{ height: '100%' }} style={style}>
        <FlashList
          {...rest}
          ListEmptyComponent={ListEmpty}
          numColumns={numColumns}
          onLoad={onLoadListener}
          ref={ref}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </Block>
    )
  } else {
    return (
      <FlashList
        {...rest}
        ListEmptyComponent={ListEmpty}
        numColumns={numColumns}
        onLoad={onLoadListener}
        ref={ref}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    )
  }
}

export default function InfiniteScrollList<T>(
  props: InfiniteScrollListProps<T>
): React.ReactElement {
  return <FlashListComponent {...props} />
}
