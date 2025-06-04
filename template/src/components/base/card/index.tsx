import React, {
  type ReactNode,
  createContext,
  useContext,
  useMemo
} from 'react'
import { type ImageStyle, StyleSheet, type ViewStyle } from 'react-native'

import type { ImageSource } from 'expo-image'

import { Block } from '../block'
import { Image } from '../image'

type CardContextType = {
  mode?:
    | 'default'
    | 'withDivider'
    | 'withFooter'
    | 'withAdsHeader'
    | 'withAdsFooter'
    | 'coverImage'
    | 'centerImage'
  variant?: 'default' | 'bodered' | 'shadow'
}

const CardContext = createContext<CardContextType>({})

interface CardProps {
  mode?: CardContextType['mode']
  variant?: CardContextType['variant']
  children: ReactNode
  style?: ViewStyle
}

const Card = ({
  children,
  mode = 'default',
  variant = 'default',
  style
}: CardProps): React.JSX.Element => {
  const contextValue = useMemo(() => ({ mode, variant }), [mode, variant])

  return (
    <CardContext.Provider value={contextValue}>
      <Block
        style={[
          styles.default,
          variant === 'bodered' && styles.bodered,
          variant === 'shadow' && styles.shadow,
          style
        ]}>
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
  const { mode } = useContext(CardContext)
  return (
    <Block
      style={[
        styles.header,
        mode === 'withAdsHeader' && styles.headerWithAds,
        style
      ]}>
      {children}
    </Block>
  )
}

const CardContent = ({
  children,
  style
}: {
  children: ReactNode
  style?: ViewStyle
}): React.JSX.Element => {
  const { mode } = useContext(CardContext)
  return (
    <Block
      style={[
        styles.content,
        mode === 'withDivider' && styles.contentWithDivider,
        style
      ]}>
      {children}
    </Block>
  )
}

const CardFooter = ({
  children,
  style
}: {
  children: ReactNode
  style?: ViewStyle
}): React.JSX.Element => {
  const { mode } = useContext(CardContext)
  return (
    <Block
      style={[
        styles.footer,
        mode === 'withAdsFooter' && styles.footerWithAds,
        style
      ]}>
      {children}
    </Block>
  )
}

const CardImage = ({
  source,
  style
}: {
  source: ImageSource
  style?: ImageStyle
}): React.JSX.Element => {
  const { mode } = useContext(CardContext)

  return (
    <Image
      contentFit='contain'
      source={source}
      style={[
        styles.image,
        mode === 'coverImage' && styles.coverImage,
        mode === 'centerImage' && styles.centerImage,
        style
      ]}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white',
    margin: 8
  },
  bodered: {
    backgroundColor: 'white',
    borderRadius: 16,
    margin: 8
  },
  shadow: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 8
  },
  header: {
    padding: 16
  },
  headerWithAds: {
    padding: 8
  },
  content: {
    padding: 16
  },
  contentWithDivider: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5'
  },
  footer: {
    padding: 16
  },
  footerWithAds: {
    padding: 8
  },
  image: {
    width: '100%',
    height: 200
  },
  coverImage: {
    height: 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  centerImage: {
    height: 150,
    width: '90%',
    alignSelf: 'center',
    margin: 16,
    borderRadius: 8
  }
})

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter
Card.Image = CardImage

export default Card
