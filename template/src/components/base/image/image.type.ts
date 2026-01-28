import type {
  Image as ExpoImage,
  ImageProps as ExpoImageProps
} from 'expo-image'

export type ContentFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'

export type ResizeMode = ExpoImageProps['contentFit']

export type ImgProps = ExpoImageProps & {
  /**
   * Size of image
   * Example:
   * ```
   * <Image
   *   size={{ width: 100, height: 100 }}
   * />
   * ```
   * or
   * ```
   * <Image
   *  size={100}
   * />
   * ```
   */
  size?: { width: number; height: number } | number
  borderRadius?: number
}

export type TImageProps = Omit<ImgProps, 'resizeMode'> & {
  alt?: string
  blurhash?: string
  resizeMode?: ResizeMode
  ref?: React.Ref<ExpoImage>
}
