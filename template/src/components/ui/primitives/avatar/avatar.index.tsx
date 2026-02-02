import Block from '@components/ui/layouts/block/block.index'
import Image from '@components/ui/primitives/image/image.index'
import Skeleton from '@components/ui/primitives/skeleton/skeleton.index'
import Animated, { FadeIn } from 'react-native-reanimated'
import { useMutative } from 'shared/hooks/use-mutative'
import type { TAvatarProps } from './avatar.type'

export default function Avatar(props: TAvatarProps): React.JSX.Element {
  const { size, borderRadius = 999, enableSkeleton, ...rest } = props
  const [isLoading, setIsLoading] = useMutative(enableSkeleton, {
    enableAutoFreeze: true
  })

  const renderAvatar = () => {
    return (
      <Animated.View entering={FadeIn}>
        <Block radius={borderRadius} size={size}>
          <Image
            alt='Avatar'
            borderRadius={borderRadius}
            recyclingKey={props.url}
            size={size}
            source={props.url}
            style={{ height: size, width: size }}
            {...(enableSkeleton
              ? {
                  onLoad: (): void => setIsLoading(false),
                  onLoadStart: (): void => setIsLoading(true)
                }
              : {})}
            {...rest}
          />
          {props.children}
        </Block>
      </Animated.View>
    )
  }

  if (enableSkeleton) {
    return isLoading ? (
      <Skeleton backgroundColor='gray_200' radius={borderRadius} size={size} />
    ) : (
      renderAvatar()
    )
  }
  return renderAvatar()
}
