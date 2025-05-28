import { memo } from 'react'

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
      {...(between && { justify: 'space-between' })}
      {...(start && { align: 'flex-start' })}
      {...(center && { align: 'center' })}
      {...(end && { align: 'flex-end' })}
      row
      role='row'
      {...rest}>
      {children}
    </Block>
  )
}
export default memo(Row)
