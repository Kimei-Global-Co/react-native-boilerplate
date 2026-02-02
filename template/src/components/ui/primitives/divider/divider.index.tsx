import Block from '@components/ui/layouts/block/block.index'
import Row from '@components/ui/layouts/row/row.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import type { TDividerProps } from './divider.type'

export default function Divider(props: TDividerProps): React.JSX.Element {
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
    <Block backgroundColor={color} flex style={{ height: thickness }} />
  )

  const VerticalLine = (
    <Block backgroundColor={color} flex style={{ width: thickness }} />
  )

  // Divider without label
  if (!label) {
    return (
      <Block
        align='center'
        row={isHorizontal}
        style={[
          isHorizontal
            ? { marginVertical: spacing }
            : { marginHorizontal: spacing },
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
      <Row align='center' gap={12} style={[{ marginVertical: spacing }, style]}>
        {HorizontalLine}
        <Typography color={labelColor} size={12}>
          {label}
        </Typography>
        {HorizontalLine}
      </Row>
    )
  }

  // Vertical divider with label
  return (
    <Block
      align='center'
      gap={8}
      style={[{ marginHorizontal: spacing }, style]}
    >
      {VerticalLine}
      <Typography color={labelColor} size={12}>
        {label}
      </Typography>
      {VerticalLine}
    </Block>
  )
}
