import type { TIcon } from '@assets/icons'
import { Icon } from '@components/ui/primitives/icon/icon.index'
import type { ButtonIconProps } from './button.type'

export function ButtonIcon<T extends TIcon>(
  props: Readonly<ButtonIconProps<T>>
): React.JSX.Element {
  if ('children' in props) {
    return <>{props.children}</>
  }

  const { type, name, size, color, ...rest } = props

  return <Icon {...rest} color={color} name={name} size={size} type={type} />
}
