import theme from '@theme'
import { Block } from '../block'

export const Spacer: React.FC<{ x?: number; y?: number }> = ({
  x = 0,
  y = theme.spacing.s
}) => <Block size={{ height: y, width: x }} />
