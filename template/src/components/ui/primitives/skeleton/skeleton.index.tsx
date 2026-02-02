import type { ViewStyle } from 'react-native'

import Colors from '@theme/colors'
import { Shimmer, ShimmerProvider } from 'react-native-fast-shimmer'
import Animated, { FadeOut } from 'react-native-reanimated'
import { typeGuards } from 'shared/utils/helper'
import type Block from '../block/block.index'

export type SkeletonProps = React.ComponentProps<typeof Shimmer> &
  Pick<
    React.ComponentProps<typeof Block>,
    'size' | 'radius' | 'backgroundColor'
  >

export default function Skeleton(props: SkeletonProps): React.JSX.Element {
  const { speed = 0.7, size, radius, backgroundColor, style, ...rest } = props

  const skeletonStyles = {
    ...(typeGuards(size, 'number')
      ? { height: size, width: size }
      : { height: size?.height, width: size?.width }),
    ...(radius && { borderRadius: radius }),
    ...(backgroundColor && { backgroundColor: Colors[backgroundColor] })
  } as ViewStyle

  return (
    <Animated.View exiting={FadeOut}>
      <ShimmerProvider>
        <Shimmer
          speed={speed}
          style={[skeletonStyles, style as ViewStyle]}
          {...rest}
        />
      </ShimmerProvider>
    </Animated.View>
  )
}
