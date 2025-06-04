import { ScrollView } from 'react-native'

import { localImage } from '@assets/images'
import { Block, Card, Header, Text } from '@components'

import { createContainer } from '../create-container'

const CardComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header isBack title={'Card component'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Default Card */}
        <Card>
          <Card.Header>
            <Text>Default Card Header</Text>
          </Card.Header>
          <Card.Content>
            <Text>This is the default card content</Text>
          </Card.Content>
          <Card.Footer>
            <Text>Default Card Footer</Text>
          </Card.Footer>
        </Card>

        {/* Card with Divider */}
        <Card mode='withDivider' variant='bodered'>
          <Card.Header>
            <Text>Card with Divider</Text>
          </Card.Header>
          <Card.Content>
            <Text>Content with top and bottom dividers</Text>
          </Card.Content>
          <Card.Footer>
            <Text>Footer</Text>
          </Card.Footer>
        </Card>

        {/* Card with Cover Image */}
        <Card mode='coverImage' variant='shadow'>
          <Card.Image source={localImage().icEmpty} />
          <Card.Content>
            <Text>Card with cover image</Text>
          </Card.Content>
        </Card>

        {/* Card with Center Image */}
        <Card mode='centerImage'>
          <Card.Header>
            <Text>Card with Center Image</Text>
          </Card.Header>
          <Card.Image source={localImage().icEmpty} />
          <Card.Content>
            <Text>Content below centered image</Text>
          </Card.Content>
        </Card>

        {/* Card with Ads Header */}
        <Card mode='withAdsHeader'>
          <Card.Header>
            {/* Ad content goes here */}
            <Text>Advertisement Header</Text>
          </Card.Header>
          <Card.Content>
            <Text>Main content</Text>
          </Card.Content>
        </Card>

        {/* Card with Ads Footer */}
        <Card mode='withAdsFooter'>
          <Card.Content>
            <Text>Main content</Text>
          </Card.Content>
          <Card.Footer>
            {/* Ad content goes here */}
            <Text>Advertisement Footer</Text>
          </Card.Footer>
        </Card>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(CardComponent, 'Card')

export default function ExampleCard(): React.JSX.Element {
  return <Root />
}
