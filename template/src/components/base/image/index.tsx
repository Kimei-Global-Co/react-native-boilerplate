import { forwardRef, useMemo } from 'react'

import { Image as ExpoImage, type ImageSource } from 'expo-image'

import type { TImageProps } from './type'

export const Image = forwardRef<ExpoImage, TImageProps>(
  function Image(props, ref) {
    const {
      borderRadius,
      source,
      size,
      style,
      contentFit,
      resizeMode,
      blurhash,
      ...rest
    } = props

    const imageSource = useMemo(
      () =>
        typeof source === 'object'
          ? {
              ...source,
              headers: {
                Accept: 'image/webp,*/*;q=0.8'
              }
            }
          : source,
      [source]
    )

    const imageSize = useMemo(() => {
      if (typeof size === 'number') {
        return { width: size, height: size }
      }
      return size
    }, [size])

    if (typeof source === 'object' && !(source as ImageSource)?.uri) {
      console.warn('Image source is not a valid uri', source)
      return null
    }

    return (
      <ExpoImage
        ref={ref}
        cachePolicy='disk'
        contentFit={contentFit ?? resizeMode}
        source={imageSource}
        placeholder={{
          blurhash,
          width: imageSize?.width,
          height: imageSize?.height
        }}
        style={[
          {
            height: imageSize?.height,
            width: imageSize?.width,
            borderRadius
          },
          style
        ]}
        {...rest}
      />
    )
  }
)
