import { createContext, type ReactNode, useMemo } from 'react'
import { type ImageStyle, StyleSheet, type ViewStyle } from 'react-native'

import type { ImageSource } from 'expo-image'
import { Block } from '../block'
import { Image } from '../image'

type CardContextType = {
  variant?: 'default' | 'bodered' | 'shadow'
}

const CardContext = createContext<CardContextType>({})

interface CardProps {
  variant?: CardContextType['variant']
  children: ReactNode
  style?: ViewStyle
}

const Card = ({
  children,
  variant = 'default',
  style
}: CardProps): React.JSX.Element => {
  const contextValue = useMemo(() => ({ variant }), [variant])

  return (
    <CardContext.Provider value={contextValue}>
      <Block
        style={[
          styles.default,
          variant === 'bodered' && styles.bodered,
          variant === 'shadow' && styles.shadow,
          style
        ]}
      >
        {children}
      </Block>
    </CardContext.Provider>
  )
}

const CardHeader = ({
  children,
  style
}: {
  children: ReactNode
  style?: ViewStyle
}): React.JSX.Element => {
  return <Block style={[styles.header, style]}>{children}</Block>
}

const CardContent = ({
  children,
  style
}: {
  children: ReactNode
  style?: ViewStyle
}): React.JSX.Element => {
  return <Block style={[styles.content, style]}>{children}</Block>
}

const CardFooter = ({
  children,
  style
}: {
  children: ReactNode
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
    elevation: 3,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  }
})

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter
Card.Image = CardImage
Card.Divider = CardDivider

export default Card
