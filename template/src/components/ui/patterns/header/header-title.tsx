import { Typography } from '@components/ui/primitives/typography/typo.index'
import type { HeaderTextProps } from './header.type'

export function HeaderTitle({
  children,
  center,
  style,
  numberOfLines = 1
}: Readonly<HeaderTextProps>) {
  if (!children) {
    return null
  }
  return (
    <Typography center={center} numberOfLines={numberOfLines} style={style}>
      {children}
    </Typography>
  )
}
