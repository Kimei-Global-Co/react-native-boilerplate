import { Block } from '@components/ui/primitives/block/block.index'

type SpacerProps = {
  readonly x?: number
  readonly y?: number
}

export function Spacer({ x, y }: SpacerProps) {
  return <Block size={{ height: y, width: x }} />
}
