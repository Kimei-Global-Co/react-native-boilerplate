import { Block } from '@components/ui/primitives/block/block.index'

interface ListItemSectionProps extends React.ComponentProps<typeof Block> {}

export function ListItemLeading(
  props: ListItemSectionProps
): React.JSX.Element {
  const { style, children, ...rest } = props
  return (
    <Block style={style} {...rest}>
      {children}
    </Block>
  )
}

ListItemLeading.displayName = 'ListItem.Leading'
