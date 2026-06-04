import { Block } from '@components/ui/primitives/block/block.index'
import { Row } from '@components/ui/primitives/row/row.index'
import type { HeaderSectionProps } from './header.type'

export function HeaderSection({
  children,
  position,
  style
}: Readonly<HeaderSectionProps>) {
  if (position === 'content') {
    return (
      <Block flex={true} justify='center' style={style}>
        {children}
      </Block>
    )
  }

  return (
    <Row
      center={position !== 'right'}
      end={position === 'right'}
      gap={8}
      style={style}
    >
      {children}
    </Row>
  )
}
