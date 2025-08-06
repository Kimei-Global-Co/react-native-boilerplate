import type { ComponentType } from 'react'

import type { FlashListProps, FlashListRef } from '@shopify/flash-list'

export type InfiniteScrollListProps<T> = FlashListProps<T> & {
  ListHeaderComponent?: ComponentType<{
    context?: unknown
  }>
  ListFooterComponent?: ComponentType<{
    context?: unknown
  }>
  ref?: React.Ref<FlashListRef<T>>
}
