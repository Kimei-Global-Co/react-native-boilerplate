import { StyleSheet, View } from 'react-native'

import Colors from '@theme/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const MENU_ITEMS = {
  Accordion: 'Accordion',
  Avatar: 'Avatar',
  Button: 'Button',
  Card: 'Card',
  EmptyView: 'EmptyView',
  Header: 'Header',
  Image: 'Image',
  Lingui: 'Lingui',
  List: 'List',
  Row: 'Row',
  Spacer: 'Spacer',
  Spinner: 'Spinner',
  Tag: 'Tag',
  Typography: 'Typography'
} as const

type DisplayNames = typeof MENU_ITEMS

export const createContainer = <Props extends object>(
  Component: React.ComponentType<Props>,
  displayName: DisplayNames[keyof DisplayNames]
): React.FC<Props> => {
  const MenuComponent: React.FC<Props> = (props: Props) => {
    const { top } = useSafeAreaInsets()
    return (
      <View style={[styles.container, { paddingTop: top }]}>
        <Component {...props} />
      </View>
    )
  }
  MenuComponent.displayName = displayName

  return MenuComponent
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1
  }
})
