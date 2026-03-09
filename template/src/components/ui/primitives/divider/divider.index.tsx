import { Block } from '@components/ui/primitives/block/block.index'
import { Row } from '@components/ui/primitives/row/row.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import type { TDividerProps } from './divider.type'

export function Divider(props: Readonly<TDividerProps>): React.JSX.Element {
  const {
    orientation = 'horizontal',
    label,
    color = 'gray_200',
    labelColor = 'gray_500',
    spacing = 0,
    thickness = 1,
    style
  } = props

  const isHorizontal = orientation === 'horizontal'

  const HorizontalLine = (
    <Block backgroundColor={color} flex={true} style={{ height: thickness }} />
  )

  const VerticalLine = (
    <Block backgroundColor={color} flex={true} style={{ width: thickness }} />
  )

  // Divider without label
  if (!label) {
    return (
      <Block
        align='center'
        style={[
          isHorizontal
            ? { flexDirection: 'row', marginVertical: spacing }
            : { flexDirection: 'column', marginHorizontal: spacing },
          style
        ]}
      >
        {isHorizontal ? HorizontalLine : VerticalLine}
      </Block>
    )
  }

  // Horizontal divider with label
  if (isHorizontal) {
    return (
      <Row align='center' gap={12} margin={{ vertical: spacing }} style={style}>
        {HorizontalLine}
        <Typography color={labelColor}>{label}</Typography>
        {HorizontalLine}
      </Row>
    )
  }

  // Vertical divider with label
  return (
    <Block
      align='center'
      gap={8}
      margin={{ horizontal: spacing }}
      style={style}
    >
      {VerticalLine}
      <Typography color={labelColor}>{label}</Typography>
      {VerticalLine}
    </Block>
  )
}
