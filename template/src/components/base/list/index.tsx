import { FlashList, type ListRenderItemInfo } from '@shopify/flash-list'
import Block from '../block'
import EmptyView from '../empty-view'
import type { InfiniteScrollListProps } from './type'

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
    if (!propRenderItem) return null

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
          role='list'
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
        role='list'
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
