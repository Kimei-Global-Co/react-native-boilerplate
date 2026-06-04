import { Block } from '@components/ui/primitives/block/block.index'

interface ListItemSectionProps extends React.ComponentProps<typeof Block> {}

export function ListItemContent(
  props: ListItemSectionProps
): React.JSX.Element {
  const { style, children, ...rest } = props
  return (
    <Block flex={true} gap='space.050' style={style} {...rest}>
      {children}
    </Block>
  )
}

ListItemContent.displayName = 'ListItem.Content'
