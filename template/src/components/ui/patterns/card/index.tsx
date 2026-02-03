import type { Ref } from 'react'
import { Pressable, StyleSheet, type View } from 'react-native'

import { Block } from '@components/ui/layouts/block/block.index'
import type { BlockProps } from '@components/ui/layouts/block/block.type'
import { Image } from '@components/ui/primitives/image/image.index'
import type { TImageProps } from '@components/ui/primitives/image/image.type'
import Colors from '@theme/colors'
import { Spacing } from '@theme/layout'

interface CardProps extends BlockProps {
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
  ...props
}: CardProps): React.JSX.Element => {
  const cardStyles = [
    styles.default,
    variant === 'bordered' && styles.bordered,
    variant === 'shadow' && styles.shadow,
    style
  ]

  if (onPress) {
    return (
      <Pressable
        accessibilityRole='button'
        onPress={onPress}
        ref={ref}
        style={({ pressed }) => [cardStyles, pressed && { opacity: 0.8 }]}
        {...props}
      >
        {children}
      </Pressable>
    )
  }

  return (
    <Block style={cardStyles} {...props}>
      {children}
    </Block>
  )
}

const CardHeader = ({
  children,
  style,
  ...props
}: BlockProps): React.JSX.Element => {
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
}: BlockProps): React.JSX.Element => {
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
}: BlockProps): React.JSX.Element => {
  return (
    <Block style={[styles.footer, style]} {...props}>
      {children}
    </Block>
  )
}
CardFooter.displayName = 'Card.Footer'

interface CardImageProps extends TImageProps {}

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

const CardDivider = ({ style, ...props }: BlockProps): React.JSX.Element => {
  return <Block style={[styles.divider, style]} {...props} />
}
CardDivider.displayName = 'Card.Divider'

const styles = StyleSheet.create({
  bordered: {
    backgroundColor: Colors.white,
    borderColor: Colors.neutral_200,
    borderRadius: 16,
    borderWidth: 1,
    margin: Spacing.s
  },
  content: {
    padding: Spacing.m
  },
  default: {
    backgroundColor: Colors.white,
    margin: Spacing.s
  },
  divider: {
    backgroundColor: Colors.neutral_200,
    height: StyleSheet.hairlineWidth,
    marginVertical: Spacing.s
  },
  footer: {
    padding: Spacing.m
  },
  header: {
    padding: Spacing.m
  },
  image: {
    height: 200,
    width: '100%'
  },
  shadow: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
    margin: Spacing.s
  }
})

export const Card = Object.assign(CardRoot, {
  Content: CardContent,
  Divider: CardDivider,
  Footer: CardFooter,
  Header: CardHeader,
  Image: CardImage
})
