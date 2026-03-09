import { Block } from '@components/ui/primitives/block/block.index'
import { Image } from '@components/ui/primitives/image/image.index'
import { Skeleton } from '@components/ui/primitives/skeleton/skeleton.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import Animated, { FadeIn } from 'react-native-reanimated'
import { useMutative } from 'shared/hooks/use-mutative'
import type { TAvatarProps } from './avatar.type'

export function Avatar(props: TAvatarProps): React.JSX.Element {
  const {
    size = 40,
    borderRadius = 999,
    enableSkeleton,
    fallback,
    fallbackStyle,
    ...rest
  } = props

  const { color: fallbackColor, ...fallbackTextStyle } = fallbackStyle ?? {}

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
        color={fallbackColor}
        ellipsizeMode='tail'
        fontToken='font.heading.xsmall'
        numberOfLines={1}
        style={fallbackTextStyle}
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
            onError={() => setHasError(true)}
            recyclingKey={props.url}
            size={size}
            source={props.url}
            {...skeletonCallbacks}
            {...rest}
          />
        )}
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
