import Block from '@components/ui/layouts/block/block.index'

type SpacerProps = {
  readonly x?: number
  readonly y?: number
}

export default function Spacer({ x, y }: SpacerProps) {
  return <Block size={{ height: y, width: x }} />
}
