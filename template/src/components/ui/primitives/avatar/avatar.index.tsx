import Block from '@components/ui/layouts/block/block.index'
import Image from '@components/ui/primitives/image/image.index'
import Skeleton from '@components/ui/primitives/skeleton/skeleton.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import Animated, { FadeIn } from 'react-native-reanimated'
import { useMutative } from 'shared/hooks/use-mutative'
import type { TAvatarProps } from './avatar.type'

export default function Avatar(props: TAvatarProps): React.JSX.Element {
  const {
    size = 40,
    borderRadius = 999,
    enableSkeleton,
    fallback,
    fallbackStyle,
    ...rest
  } = props
  const [isLoading, setIsLoading] = useMutative(enableSkeleton, {
    enableAutoFreeze: true
  })
  const [hasError, setHasError] = useMutative(false, {
    enableAutoFreeze: true
  })

  const shouldShowFallback = fallback && (!props.url || hasError)

  const skeletonCallbacks = enableSkeleton
    ? {
        onLoad: () => setIsLoading(false),
        onLoadStart: () => setIsLoading(true)
      }
    : {}

  const FallbackComponent = (
    <Block
      align='center'
      backgroundColor='gray_200'
      justify='center'
      radius={borderRadius}
      size={size}
    >
      <Typography
        center
        color='white'
        fontType='semiBold'
        size={size * 0.4}
        style={fallbackStyle}
      >
        {fallback}
      </Typography>
    </Block>
  )

  const AvatarComponent = (
    <Animated.View entering={FadeIn}>
      <Block radius={borderRadius} size={size}>
        {shouldShowFallback ? (
          FallbackComponent
        ) : (
          <Image
            alt='Avatar'
            borderRadius={borderRadius}
            recyclingKey={props.url}
            size={size}
            source={props.url}
            style={{ height: size, width: size }}
            {...skeletonCallbacks}
            onError={() => setHasError(true)}
            {...rest}
          />
        )}
        {props.children}
      </Block>
    </Animated.View>
  )

  if (enableSkeleton && isLoading && !shouldShowFallback) {
    return (
      <Skeleton backgroundColor='gray_200' radius={borderRadius} size={size} />
    )
  }
  return AvatarComponent
}
