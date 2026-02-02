import { ScrollView } from 'react-native'

import Block from '@components/ui/layouts/block/block.index'
import Row from '@components/ui/layouts/row/row.index'
import Header from '@components/ui/patterns/header/header.index'
import Avatar from '@components/ui/primitives/avatar/avatar.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { useMutative } from 'shared/hooks/use-mutative'
import { useTimeout } from 'shared/hooks/use-timeout'
import { createContainer } from '../create-container'

const sampleImageUrl = 'https://i.pravatar.cc/300'
const invalidImageUrl = 'https://invalid-url-that-will-fail.com/image.jpg'

const AvatarComponent = (): React.JSX.Element => {
  const [enableSkeleton, setEnableSkeleton] = useMutative(true)

  useTimeout(() => {
    setEnableSkeleton(false)
  }, 3000)

  return (
    <Block collapsable={false} flex inset='bottom'>
      <Header>
        <Header.Left>
          <Header.BackButton />
        </Header.Left>
        <Header.Content>
          <Header.Title>Avatar component</Header.Title>
        </Header.Content>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={16} padding={16}>
          {/* Different Sizes */}
          <Block gap={8}>
            <Typography fontType='semiBold'>Avatar Sizes</Typography>
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
            <Typography fontType='semiBold'>Border Radius Variants</Typography>
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
            <Typography fontType='semiBold'>With Loading Skeleton</Typography>
            <Typography color='gray_500' size={12}>
              Skeleton shown for 3 seconds on mount
            </Typography>
            <Avatar
              enableSkeleton={enableSkeleton}
              size={48}
              url={sampleImageUrl}
            />
          </Block>

          {/* Fallback Text - No URL */}
          <Block gap={8}>
            <Typography fontType='semiBold'>
              Fallback Text (No URL provided)
            </Typography>
            <Typography color='gray_500' size={12}>
              Shows initials when no image URL is provided
            </Typography>
            <Row gap={8}>
              <Avatar fallback='JD' size={32} />
              <Avatar fallback='AB' size={48} />
              <Avatar fallback='XY' size={64} />
              <Avatar fallback='MN' size={80} />
            </Row>
          </Block>

          {/* Fallback Text - With Valid URL */}
          <Block gap={8}>
            <Typography fontType='semiBold'>
              Fallback with Valid URL (Image shown)
            </Typography>
            <Typography color='gray_500' size={12}>
              When URL is valid, image is displayed instead of fallback
            </Typography>
            <Row gap={8}>
              <Avatar fallback='JD' size={48} url={sampleImageUrl} />
              <Avatar fallback='AB' size={48} url={sampleImageUrl} />
            </Row>
          </Block>

          {/* Fallback Text - Invalid URL (Error Case) */}
          <Block gap={8}>
            <Typography fontType='semiBold'>
              Fallback on Image Error (Invalid URL)
            </Typography>
            <Typography color='gray_500' size={12}>
              Shows fallback when image fails to load
            </Typography>
            <Row gap={8}>
              <Avatar fallback='ER' size={48} url={invalidImageUrl} />
              <Avatar fallback='404' size={48} url={invalidImageUrl} />
            </Row>
          </Block>

          {/* Fallback with Different Border Radius */}
          <Block gap={8}>
            <Typography fontType='semiBold'>
              Fallback with Border Radius Variants
            </Typography>
            <Row gap={8}>
              <Avatar borderRadius={8} fallback='R8' size={48} />
              <Avatar borderRadius={16} fallback='R16' size={48} />
              <Avatar borderRadius={24} fallback='R24' size={48} />
              <Avatar fallback='RD' size={48} />
            </Row>
          </Block>

          {/* Custom Fallback Styling */}
          <Block gap={8}>
            <Typography fontType='semiBold'>Custom Fallback Styling</Typography>
            <Typography color='gray_500' size={12}>
              Custom text color via fallbackStyle prop
            </Typography>
            <Row gap={8}>
              <Avatar
                fallback='YW'
                fallbackStyle={{ color: 'yellow' }}
                size={48}
              />
              <Avatar
                fallback='CY'
                fallbackStyle={{ color: 'cyan' }}
                size={48}
              />
              <Avatar
                fallback='PK'
                fallbackStyle={{ color: 'pink' }}
                size={48}
              />
            </Row>
          </Block>

          {/* Fallback with Skeleton Loading */}
          <Block gap={8}>
            <Typography fontType='semiBold'>
              Fallback + Skeleton (No URL)
            </Typography>
            <Typography color='gray_500' size={12}>
              Shows fallback immediately when no URL provided
            </Typography>
            <Avatar enableSkeleton fallback='SK' size={48} />
          </Block>

          {/* Edge Cases */}
          <Block gap={8}>
            <Typography fontType='semiBold'>Edge Cases</Typography>
            <Typography color='gray_500' size={12}>
              Single char, long text, empty string
            </Typography>
            <Row gap={8}>
              {/* Single character */}
              <Avatar fallback='A' size={48} />
              {/* Long text (gets truncated/scaled) */}
              <Avatar fallback='ABCDE' size={48} />
              {/* Empty fallback - should still show container */}
              <Avatar fallback='' size={48} url={invalidImageUrl} />
              {/* Numbers */}
              <Avatar fallback='42' size={48} />
            </Row>
          </Block>

          {/* Combined Features */}
          <Block gap={8}>
            <Typography fontType='semiBold'>Combined Features</Typography>
            <Typography color='gray_500' size={12}>
              Fallback + skeleton + custom border radius
            </Typography>
            <Row gap={8}>
              <Avatar
                borderRadius={12}
                enableSkeleton
                fallback='C1'
                size={56}
                url={invalidImageUrl}
              />
              <Avatar borderRadius={0} enableSkeleton fallback='SQ' size={56} />
            </Row>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(AvatarComponent, 'Avatar')

export default function ExampleAvatar(): React.JSX.Element {
  return <Root />
}
