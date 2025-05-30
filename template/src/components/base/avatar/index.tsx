import { JSX, useCallback, useState } from 'react'

import { Block } from '../block'
import { Image } from '../image'
import { TAvatarProps } from './type'

export default function Avatar(props: TAvatarProps): JSX.Element {
  const { size, borderRadius = 999, enableSkeleton, ...rest } = props
  const [isLoading, setIsLoading] = useState(enableSkeleton)
  const renderAvatar = useCallback(() => {
    return (
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
    )
  }, [borderRadius, size, props.url, props.children, enableSkeleton, rest])

  if (enableSkeleton) {
    return (
      isLoading && (
        <Block radius={borderRadius} size={size}>
          {renderAvatar()}
        </Block>
      )
    )
  }
  return renderAvatar()
}
