import { StyleSheet } from 'react-native'

import { Block } from '@components/ui/layouts/block/block.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Divider } from '@components/ui/primitives/divider/divider.index'
import { Spacing } from '@theme/layout'

interface ListItemRootProps
  extends React.ComponentProps<typeof Block>,
    Pick<React.ComponentProps<typeof Button>, 'onPress'> {
  pressable?: boolean
  divider?: boolean
}

const ListItemRoot = (props: ListItemRootProps): React.JSX.Element => {
  const {
    children,
    pressable = false,
    divider = false,
    onPress,
    style,
    ...rest
  } = props
  const containerStyle = StyleSheet.flatten([styles.root, style])

  const content = pressable ? (
    <Button.Ghost
      onPress={onPress}
      style={[containerStyle, styles.buttonReset]}
      variant={{ color: 'ghost', radius: 'none' }}
      {...rest}
    >
      {children}
    </Button.Ghost>
  ) : (
    <Block style={containerStyle} {...rest}>
      {children}
    </Block>
  )

  return (
    <>
      {content}
      {divider && <Divider />}
    </>
  )
}

ListItemRoot.displayName = 'ListItem'

interface ListItemSectionProps extends React.ComponentProps<typeof Block> {}

const ListItemLeading = (props: ListItemSectionProps): React.JSX.Element => {
  const { style, children, ...rest } = props
  return (
    <Block style={style} {...rest}>
      {children}
    </Block>
  )
}

ListItemLeading.displayName = 'ListItem.Leading'

const ListItemContent = (props: ListItemSectionProps): React.JSX.Element => {
  const { style, children, ...rest } = props
  return (
    <Block flex gap='space.050' style={style} {...rest}>
      {children}
    </Block>
  )
}

ListItemContent.displayName = 'ListItem.Content'

const ListItemTrailing = (props: ListItemSectionProps): React.JSX.Element => {
  const { style, children, ...rest } = props
  return (
    <Block justify='flex-end' style={style} {...rest}>
      {children}
    </Block>
  )
}

ListItemTrailing.displayName = 'ListItem.Trailing'

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

export const ListItem = Object.assign(ListItemRoot, {
  Content: ListItemContent,
  Leading: ListItemLeading,
  Trailing: ListItemTrailing
})
