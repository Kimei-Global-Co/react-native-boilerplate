import React, { createContext, JSX, ReactNode, useContext, useMemo } from 'react'
import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { ImageSource } from 'expo-image'

import { Block } from '../block'
import { Image } from '../image'

type CardContextType = {
  variant?:
    | 'default'
    | 'withDivider'
    | 'withFooter'
    | 'withAdsHeader'
    | 'withAdsFooter'
    | 'coverImage'
    | 'centerImage'
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
}: CardProps): JSX.Element => {
  const contextValue = useMemo(() => ({ variant }), [variant])

  return (
    <CardContext.Provider value={contextValue}>
      <Block style={[styles.card, style]}>{children}</Block>
    </CardContext.Provider>
  )
}

const CardHeader = ({
  children,
  style
}: {
  children: ReactNode
  style?: ViewStyle
}): JSX.Element => {
  const { variant } = useContext(CardContext)
  return (
    <Block
      style={[
        styles.header,
        variant === 'withAdsHeader' && styles.headerWithAds,
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
}): JSX.Element => {
  const { variant } = useContext(CardContext)
  return (
    <Block
      style={[
        styles.content,
        variant === 'withDivider' && styles.contentWithDivider,
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
}): JSX.Element => {
  const { variant } = useContext(CardContext)
  return (
    <Block
      style={[
        styles.footer,
        variant === 'withAdsFooter' && styles.footerWithAds,
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
}): JSX.Element => {
  const { variant } = useContext(CardContext)

  return (
    <Image
      contentFit='cover'
      source={source}
      style={[
        styles.image,
        variant === 'coverImage' && styles.coverImage,
        variant === 'centerImage' && styles.centerImage,
        style
      ]}
    />
  )
}

const styles = StyleSheet.create({
  card: {
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
    padding: 0
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
    padding: 0
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
