import { StyleSheet } from 'react-native'

import { Block } from '@components/ui/primitives/block/block.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Divider } from '@components/ui/primitives/divider/divider.index'
import { Spacing } from '@theme/layout'
import { ListItemContent } from './list-item-content'
import { ListItemLeading } from './list-item-leading'
import { ListItemTrailing } from './list-item-trailing'

interface ListItemRootProps
  extends React.ComponentProps<typeof Block>,
    Pick<React.ComponentProps<typeof Button>, 'onPress'> {
  pressable?: boolean
  divider?: boolean
}

export function ListItem(
  props: Readonly<ListItemRootProps>
): React.JSX.Element {
  const {
    children,
    pressable = false,
    divider = false,
    onPress,
    style,
    ...rest
  } = props
  const containerStyle = StyleSheet.flatten([styles.root, style])

  const Component = pressable ? Button.Ghost : Block

  return (
    <>
      <Component
        onPress={pressable ? onPress : undefined}
        style={[containerStyle, pressable && styles.buttonReset]}
        {...rest}
      >
        {children}
      </Component>
      {divider && <Divider />}
    </>
  )
}

ListItem.displayName = 'ListItem'

ListItem.Content = ListItemContent
ListItem.Leading = ListItemLeading
ListItem.Trailing = ListItemTrailing

const styles = StyleSheet.create({
  buttonReset: {
    height: undefined
  },
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing['space.150'],
    paddingHorizontal: Spacing['space.200'],
    paddingVertical: Spacing['space.150']
  }
})
