import { withUnistyles } from 'react-native-unistyles'
import Block from '../block'

const UniSpacer = withUnistyles(Block)

type SpacerProps = {
  x?: number
  y?: number
}

export default function Spacer({ x, y }: SpacerProps) {
  return (
    <UniSpacer
      uniProps={(theme) => ({
        size: { height: y ?? theme.spacing.s, width: x ??0 }
      })}
    />
  )
}
