import { Block } from '@components/ui/primitives/block/block.index'

interface ListItemSectionProps extends React.ComponentProps<typeof Block> {}

export function ListItemTrailing(
  props: ListItemSectionProps
): React.JSX.Element {
  const { style, children, ...rest } = props
  return (
    <Block justify='flex-end' style={style} {...rest}>
      {children}
    </Block>
  )
}

ListItemTrailing.displayName = 'ListItem.Trailing'
