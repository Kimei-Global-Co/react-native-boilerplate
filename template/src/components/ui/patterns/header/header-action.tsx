import type { TIcon } from '@assets/icons'
import { Button } from '@components/ui/primitives/button/button.index'
import type { HeaderActionProps } from './header.type'

export function HeaderAction<T extends TIcon>(
  props: Readonly<HeaderActionProps<T>>
) {
  const { onPress, style, size = 22, ...iconProps } = props
  return (
    <Button.Ghost onPress={onPress} style={[{ width: 30 }, style]}>
      <Button.Content>
        <Button.Icon {...iconProps} size={size} />
      </Button.Content>
    </Button.Ghost>
  )
}
