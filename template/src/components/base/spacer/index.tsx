import theme from '@theme'
import Block from '../block'

export default function Spacer({
  x = 0,
  y = theme.spacing.s
}: {
  x?: number
  y?: number
}) {
  return <Block size={{ height: y, width: x }} />
}
