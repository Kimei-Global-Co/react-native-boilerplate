import Block from '@components/ui/layouts/block/block.index'

type TRowProps = {
  start?: boolean
  center?: boolean
  end?: boolean
  between?: boolean
} & React.ComponentPropsWithoutRef<typeof Block>

export default function Row(props: TRowProps): React.JSX.Element {
  const { start, center, end, between, children, ...rest } = props

  return (
    <Block
      row
      {...(between && { justify: 'space-between' })}
      {...(start && { justify: 'flex-start' })}
      {...(center && { justify: 'center' })}
      {...(end && { justify: 'flex-end' })}
      {...rest}
    >
      {children}
    </Block>
  )
}
