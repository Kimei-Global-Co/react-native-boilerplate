import { Block } from '../block'

type TRowProps = {
  start?: boolean
  center?: boolean
  end?: boolean
  between?: boolean
} & React.ComponentPropsWithoutRef<typeof Block>

const Row = (props: TRowProps): React.ReactElement => {
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
export default Row
