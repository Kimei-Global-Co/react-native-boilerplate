import { StyleSheet } from 'react-native'

import type { Block } from '@components/ui/layouts/block/block.index'
import Colors from '@theme/colors'
import { Shimmer, ShimmerProvider } from 'react-native-fast-shimmer'
import Animated, { FadeOut } from 'react-native-reanimated'
import { createSizeStyle, handleRadius } from 'shared/utils/helper'

type SkeletonProps = React.ComponentProps<typeof Shimmer> &
  Pick<
    React.ComponentProps<typeof Block>,
    'size' | 'radius' | 'backgroundColor'
  >

export function Skeleton(props: SkeletonProps): React.JSX.Element {
  const { speed = 0.7, size, radius, backgroundColor, style, ...rest } = props

  const skeletonStyles = StyleSheet.flatten([
    createSizeStyle(size),
    radius !== undefined && handleRadius(radius),
    backgroundColor && {
      backgroundColor: Colors[backgroundColor]
    },
    style
  ])

  return (
    <Animated.View exiting={FadeOut}>
      <ShimmerProvider>
        <Shimmer speed={speed} style={skeletonStyles} {...rest} />
      </ShimmerProvider>
    </Animated.View>
  )
}
