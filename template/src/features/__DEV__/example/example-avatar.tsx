import { ScrollView } from 'react-native'

import { Avatar, Block, Header, Row, Typography } from '@components'
import { createContainer } from '../create-container'

const AvatarComponent = (): React.JSX.Element => {
  const sampleImageUrl = 'https://i.pravatar.cc/300'

  return (
    <Block flex={1}>
      <Header isBack title={'Avatar component'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={16} padding={16}>
          {/* Different Sizes */}
          <Block gap={8}>
            <Typography>Avatar Sizes</Typography>
            <Row gap={8}>
              <Avatar size={32} url={sampleImageUrl} />
              <Avatar size={48} url={sampleImageUrl} />
              <Avatar size={64} url={sampleImageUrl} />
              <Avatar size={80} url={sampleImageUrl} />
            </Row>
          </Block>

          {/* Different Border Radius */}
          <Block gap={8}>
            <Typography>Border Radius Variants</Typography>
            <Row gap={8}>
              <Avatar borderRadius={8} size={48} url={sampleImageUrl} />
              <Avatar borderRadius={16} size={48} url={sampleImageUrl} />
              <Avatar borderRadius={24} size={48} url={sampleImageUrl} />
              <Avatar size={48} url={sampleImageUrl} />
            </Row>
          </Block>

          {/* With Loading Skeleton */}
          <Block gap={8}>
            <Typography>With Loading Skeleton</Typography>
            <Avatar enableSkeleton size={48} url={sampleImageUrl} />
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
