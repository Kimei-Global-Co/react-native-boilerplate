import type { Ref } from 'react'
import { StyleSheet, type View } from 'react-native'

import { Block } from '@components/ui/primitives/block/block.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Image } from '@components/ui/primitives/image/image.index'
import { Colors } from '@theme/colors'
import { Spacing } from '@theme/layout'

interface CardProps extends React.ComponentProps<typeof Block> {
  variant?: 'default' | 'bordered' | 'shadow'
  onPress?: () => void
  ref?: Ref<View>
}

const CardRoot = ({
  children,
  variant = 'default',
  style,
  onPress,
  ref,
  ...rest
}: CardProps): React.JSX.Element => {
  const cardStyles = StyleSheet.flatten([
    styles.default,
    variant === 'bordered' && styles.bordered,
    variant === 'shadow' && styles.shadow,
    style
  ])
  const canPressable = typeof onPress === 'function'

  const Component = canPressable ? Button : Block

  return (
    <Component
      onPress={canPressable ? onPress : undefined}
      style={cardStyles}
      {...rest}
    >
      {children}
    </Component>
  )
}

const CardHeader = ({
  children,
  style,
  ...props
}: React.ComponentProps<typeof Block>): React.JSX.Element => {
  return (
    <Block style={[styles.header, style]} {...props}>
      {children}
    </Block>
  )
}
CardHeader.displayName = 'Card.Header'

const CardContent = ({
  children,
  style,
  ...props
}: React.ComponentProps<typeof Block>): React.JSX.Element => {
  return (
    <Block style={[styles.content, style]} {...props}>
      {children}
    </Block>
  )
}
CardContent.displayName = 'Card.Content'

const CardFooter = ({
  children,
  style,
  ...props
}: React.ComponentProps<typeof Block>): React.JSX.Element => {
  return (
    <Block style={[styles.footer, style]} {...props}>
      {children}
    </Block>
  )
}
CardFooter.displayName = 'Card.Footer'

interface CardImageProps extends React.ComponentProps<typeof Image> {}

const CardImage = ({
  source,
  style,
  ...props
}: CardImageProps): React.JSX.Element => {
  return (
    <Image
      contentFit='contain'
      source={source}
      style={[styles.image, style]}
      {...props}
    />
  )
}
CardImage.displayName = 'Card.Image'

const CardDivider = ({
  style,
  ...props
}: React.ComponentProps<typeof Block>): React.JSX.Element => {
  return <Block style={[styles.divider, style]} {...props} />
}
CardDivider.displayName = 'Card.Divider'

const styles = StyleSheet.create({
  bordered: {
    backgroundColor: Colors.white,
    borderColor: Colors.neutral_200,
    borderRadius: 16,
    borderWidth: 1,
    margin: Spacing['space.100']
  },
  content: {
    padding: Spacing['space.200']
  },
  default: {
    backgroundColor: Colors.white,
    margin: Spacing['space.100']
  },
  divider: {
    backgroundColor: Colors.neutral_200,
    height: StyleSheet.hairlineWidth,
    marginVertical: Spacing['space.100']
  },
  footer: {
    padding: Spacing['space.200']
  },
  header: {
    padding: Spacing['space.200']
  },
  image: {
    height: 200,
    width: '100%'
  },
  shadow: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
    margin: Spacing['space.100']
  }
})

export const Card = Object.assign(CardRoot, {
  Content: CardContent,
  Divider: CardDivider,
  Footer: CardFooter,
  Header: CardHeader,
  Image: CardImage
})
