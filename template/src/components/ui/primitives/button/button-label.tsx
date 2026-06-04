import { StyleSheet } from 'react-native'

import { Typography } from '@components/ui/primitives/typography/typo.index'
import { useButtonContext } from './button.context'
import type { ButtonLabelProps } from './button.type'
import { textColorVariants, textSizeVariants } from './button.variants'

export function ButtonLabel({
  children
}: Readonly<ButtonLabelProps>): React.JSX.Element | null {
  const { title, variant } = useButtonContext('Button.Label')
  const content = children ?? title
  if (!content) {
    return null
  }

  const textStyle = [
    styles.textBase,
    textColorVariants[variant.color],
    textSizeVariants[variant.size]
  ]

  return (
    <Typography center={true} style={textStyle}>
      {content}
    </Typography>
  )
}

const styles = StyleSheet.create({
  textBase: {
    textAlign: 'center'
  }
})
