import { ScrollView } from 'react-native'

import Block from '@components/ui/layouts/block/block.index'
import Row from '@components/ui/layouts/row/row.index'
import Header from '@components/ui/patterns/header/header.index'
import Image from '@components/ui/primitives/image/image.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { createContainer } from '../create-container'

const SAMPLE_IMAGE = 'https://picsum.photos/seed/picsum/200/300'
const BLURHASH = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4'

const ImageComponent = (): React.JSX.Element => {
  return (
    <Block flex={1}>
      <Header>
        <Header.Left>
          <Header.BackButton />
        </Header.Left>
        <Header.Content>
          <Header.Title>Image Component</Header.Title>
        </Header.Content>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={16} padding={16}>
          {/* Basic Usage */}
          <Block gap={8}>
            <Typography>Basic Image</Typography>
            <Image size={200} source={SAMPLE_IMAGE} />
          </Block>

          {/* Square Images with Different Sizes */}
          <Block gap={8}>
            <Typography>Square Images (size prop)</Typography>
            <Row gap={8}>
              <Image size={50} source={SAMPLE_IMAGE} />
              <Image size={80} source={SAMPLE_IMAGE} />
              <Image size={100} source={SAMPLE_IMAGE} />
            </Row>
          </Block>

          {/* Different Border Radius */}
          <Block gap={8}>
            <Typography>Border Radius Variants</Typography>
            <Row gap={8}>
              <Image borderRadius={8} size={80} source={SAMPLE_IMAGE} />
              <Image borderRadius={16} size={80} source={SAMPLE_IMAGE} />
              <Image borderRadius={40} size={80} source={SAMPLE_IMAGE} />
            </Row>
          </Block>

          {/* Content Fit Examples */}
          <Block gap={8}>
            <Typography>Content Fit Variants</Typography>
            <Row gap={8}>
              <Image contentFit='cover' size={100} source={SAMPLE_IMAGE} />
              <Image contentFit='contain' size={100} source={SAMPLE_IMAGE} />
              <Image contentFit='fill' size={100} source={SAMPLE_IMAGE} />
            </Row>
          </Block>

          {/* With Blurhash */}
          <Block gap={8}>
            <Typography>With Blurhash Loading</Typography>
            <Image blurhash={BLURHASH} size={200} source={SAMPLE_IMAGE} />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(ImageComponent, 'Image')

export default function ExampleImage(): React.JSX.Element {
  return <Root />
}
