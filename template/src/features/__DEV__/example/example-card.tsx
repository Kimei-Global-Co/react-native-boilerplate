import { ScrollView } from 'react-native'

import { localImage } from '@assets/images'
import { Block, Card, Header, Typography } from '@components'
import { createContainer } from '../create-container'

const CardComponent = (): React.JSX.Element => {
  return (
    <Block flex>
      <Header isBack title={'Card component'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Default Card */}
        <Card>
          <Card.Header>
            <Typography>Default Card Header</Typography>
          </Card.Header>
          <Card.Content>
            <Typography>This is the default card content</Typography>
          </Card.Content>
          <Card.Footer>
            <Typography>Default Card Footer</Typography>
          </Card.Footer>
        </Card>

        {/* Card with Divider */}
        <Card variant='bodered'>
          <Card.Header>
            <Typography>Card with Divider</Typography>
          </Card.Header>
          <Card.Divider />
          <Card.Content>
            <Typography>Content with top and bottom dividers</Typography>
          </Card.Content>
          <Card.Divider />
          <Card.Footer>
            <Typography>Footer</Typography>
          </Card.Footer>
        </Card>

        {/* Card with Cover Image */}
        <Card variant='shadow'>
          <Card.Image source={localImage().icEmpty} />
          <Card.Content>
            <Typography>Card with cover image</Typography>
          </Card.Content>
        </Card>

        {/* Card with Center Image */}
        <Card>
          <Card.Header>
            <Typography>Card with Center Image</Typography>
          </Card.Header>
          <Card.Image source={localImage().icEmpty} />
          <Card.Content>
            <Typography>Content below centered image</Typography>
          </Card.Content>
        </Card>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(CardComponent, 'Card')

export default function ExampleCard(): React.JSX.Element {
  return <Root />
}
