import { StyleSheet } from 'react-native'

import {
  Image as ExpoImage,
  type ImageSource,
  type ImageStyle
} from 'expo-image'
import { createSizeStyle, handleRadius, typeGuards } from 'shared/utils/helper'
import type { TImageProps } from './image.type'

export function Image(props: TImageProps) {
  const {
    borderRadius,
    source,
    size,
    style,
    contentFit,
    resizeMode,
    blurhash,
    ref,
    ...rest
  } = props

  const imageSource =
    typeof source === 'object'
      ? {
          ...source,
          headers: {
            Accept: 'image/webp,*/*;q=0.8'
          }
        }
      : source

  const imageSize = createSizeStyle(size)

  const imageStyle = StyleSheet.flatten([
    imageSize,
    borderRadius !== undefined && handleRadius(borderRadius),
    style
  ]) as ImageStyle

  if (typeof source === 'object' && !(source as ImageSource)?.uri) {
    console.warn('Image source is not a valid uri', source)
    return null
  }

  return (
    <ExpoImage
      cachePolicy='disk'
      contentFit={contentFit ?? resizeMode}
      placeholder={{
        blurhash,
        height: typeGuards(imageSize.height, 'number')
          ? imageSize.height
          : undefined,
        width: typeGuards(imageSize.width, 'number')
          ? imageSize.width
          : undefined
      }}
      ref={ref}
      source={imageSource}
      style={imageStyle}
      {...rest}
    />
  )
}
