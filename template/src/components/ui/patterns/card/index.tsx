import {
  type ImageStyle,
  Pressable,
  StyleSheet,
  type ViewStyle
} from 'react-native'

import type { ImageSource } from 'expo-image'
import Block from '@components/ui/layouts/block/block.index'
import Image from '@components/ui/primitives/image/image.index'

interface CardProps {
  variant?: 'default' | 'bodered' | 'shadow'
  children: React.ReactNode
  style?: ViewStyle
  onPress?: () => void
}

const Card = ({
  children,
  variant = 'default',
  style,
  onPress
}: CardProps): React.JSX.Element => {
  const cardStyles = [
    styles.default,
    variant === 'bodered' && styles.bodered,
    variant === 'shadow' && styles.shadow,
    style
  ]

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={cardStyles}>
        {children}
      </Pressable>
    )
  }

  return <Block style={cardStyles}>{children}</Block>
}

const CardHeader = ({
  children,
  style
}: {
  children: React.ReactNode
  style?: ViewStyle
}): React.JSX.Element => {
  return <Block style={[styles.header, style]}>{children}</Block>
}

const CardContent = ({
  children,
  style
}: {
  children: React.ReactNode
  style?: ViewStyle
}): React.JSX.Element => {
  return <Block style={[styles.content, style]}>{children}</Block>
}

const CardFooter = ({
  children,
  style
}: {
  children: React.ReactNode
  style?: ViewStyle
}): React.JSX.Element => {
  return <Block style={[styles.footer, style]}>{children}</Block>
}

const CardImage = ({
  source,
  style
}: {
  source: ImageSource
  style?: ImageStyle
}): React.JSX.Element => {
  return (
    <Image contentFit='contain' source={source} style={[styles.image, style]} />
  )
}

const CardDivider = ({ style }: { style?: ImageStyle }): React.JSX.Element => {
  return <Block style={[styles.divder, style]} />
}

const styles = StyleSheet.create({
  bodered: {
    backgroundColor: 'white',
    borderRadius: 16,
    margin: 8
  },
  content: {
    padding: 16
  },
  default: {
    backgroundColor: 'white',
    margin: 8
  },
  divder: {
    backgroundColor: '#E5E5E5',
    height: 1,
    marginVertical: 8
  },
  footer: {
    padding: 16
  },
  header: {
    padding: 16
  },
  image: {
    height: 200,
    width: '100%'
  },
  shadow: {
    backgroundColor: 'white',
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15);',
    margin: 8
  }
})

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter
Card.Image = CardImage
Card.Divider = CardDivider

export default Card
