import { Image } from '@components/ui/primitives/image/image.index'
import type { HeaderAvatarProps } from './header.type'

export function HeaderAvatar({
  source = 'ic_avatar',
  size = 40,
  style
}: Readonly<HeaderAvatarProps>) {
  return <Image size={size} source={source} style={style} />
}
