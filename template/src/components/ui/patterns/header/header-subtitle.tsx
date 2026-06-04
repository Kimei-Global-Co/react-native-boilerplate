import { Typography } from '@components/ui/primitives/typography/typo.index'
import type { HeaderTextProps } from './header.type'

export function HeaderSubtitle({
  children,
  center,
  style,
  numberOfLines = 1
}: Readonly<HeaderTextProps>) {
  if (!children) {
    return null
  }
  return (
    <Typography
      center={center}
      color='gray_500'
      numberOfLines={numberOfLines}
      style={style}
    >
      {children}
    </Typography>
  )
}
