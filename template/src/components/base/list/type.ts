import { FlatListProps, StyleProp, ViewStyle } from 'react-native'

export type BaseItem = { id: string | number }
export interface InfiniteScrollListProps<T extends BaseItem>
  extends Omit<FlatListProps<T>, 'keyExtractor'> {
  /**
   * Style for the container wrapping the FlatList
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * Optional loading component to show during initial load
   */
  LoadingComponent?: React.ComponentType
  /**
   * Callback when list reaches end
   */
  onEndReached?: () => void
  /**
   * Whether data is currently loading
   */
  isLoading?: boolean
}
