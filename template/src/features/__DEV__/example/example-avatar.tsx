import Block from '@components/ui/layouts/block/block.index'
import Row from '@components/ui/layouts/row/row.index'
import Header from '@components/ui/patterns/header/header.index'
import Avatar from '@components/ui/primitives/avatar/avatar.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { useMutative } from 'shared/hooks/use-mutative'
import { useTimeout } from 'shared/hooks/use-timeout'
import { createContainer } from '../create-container'

const AvatarComponent = (): React.JSX.Element => {
  const sampleImageUrl = 'https://i.pravatar.cc/300'

  const [enableSkeleton, setEnableSkeleton] = useMutative(true)

  useTimeout(() => {
    setEnableSkeleton(false)
  }, 3000)

  return (
    <Block collapsable={false} flex>
      <Header isBack title={'Avatar component'} />
      <Block gap={16} padding={16}>
        {/* Different Sizes */}
        <Block gap={8}>
          <Typography>Avatar Sizes</Typography>
          <Row gap={8}>
            <Avatar
              enableSkeleton={enableSkeleton}
              size={32}
              url={sampleImageUrl}
            />
            <Avatar
              enableSkeleton={enableSkeleton}
              size={48}
              url={sampleImageUrl}
            />
            <Avatar
              enableSkeleton={enableSkeleton}
              size={64}
              url={sampleImageUrl}
            />
            <Avatar
              enableSkeleton={enableSkeleton}
              size={80}
              url={sampleImageUrl}
            />
          </Row>
        </Block>

        {/* Different Border Radius */}
        <Block gap={8}>
          <Typography>Border Radius Variants</Typography>
          <Row gap={8}>
            <Avatar
              borderRadius={8}
              enableSkeleton={enableSkeleton}
              size={48}
              url={sampleImageUrl}
            />
            <Avatar
              borderRadius={16}
              enableSkeleton={enableSkeleton}
              size={48}
              url={sampleImageUrl}
            />
            <Avatar
              borderRadius={24}
              enableSkeleton={enableSkeleton}
              size={48}
              url={sampleImageUrl}
            />
            <Avatar
              enableSkeleton={enableSkeleton}
              size={48}
              url={sampleImageUrl}
            />
          </Row>
        </Block>

        {/* With Loading Skeleton */}
        <Block gap={8}>
          <Typography>With Loading Skeleton</Typography>
          <Avatar
            enableSkeleton={enableSkeleton}
            size={48}
            url={sampleImageUrl}
          />
        </Block>
      </Block>
    </Block>
  )
}

const Root = createContainer(AvatarComponent, 'Avatar')

export default function ExampleAvatar(): React.JSX.Element {
  return <Root />
}
