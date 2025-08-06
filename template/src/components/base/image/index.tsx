import { Image as ExpoImage, type ImageSource } from 'expo-image'
import type { TImageProps } from './type'

export const Image = function Image(
  props: TImageProps,
  ref?: React.Ref<ExpoImage>
) {
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

  const imageSource =
    typeof source === 'object'
      ? {
          ...source,
          headers: {
            Accept: 'image/webp,*/*;q=0.8'
          }
        }
      : source

  const imageSize =
    typeof size === 'number' ? { height: size, width: size } : size

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
        height: imageSize?.height,
        width: imageSize?.width
      }}
      ref={ref}
      source={imageSource}
      style={[
        {
          borderRadius,
          height: imageSize?.height,
          width: imageSize?.width
        },
        style
      ]}
      {...rest}
    />
  )
}
