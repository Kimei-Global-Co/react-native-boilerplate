import { ScrollView } from 'react-native'

import Block from '@components/ui/layouts/block/block.index'
import Row from '@components/ui/layouts/row/row.index'
import Header from '@components/ui/patterns/header/header.index'
import Spinner from '@components/ui/primitives/spinner/spinner.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { createContainer } from '../create-container'

const SpinnerComponent = (): React.JSX.Element => {
  return (
    <Block flex={1}>
      <Header>
        <Header.Left>
          <Header.BackButton />
        </Header.Left>
        <Header.Content>
          <Header.Title>Spinner Component</Header.Title>
        </Header.Content>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={16} padding={16}>
          {/* Different Sizes */}
          <Block gap={8}>
            <Typography>Spinner Sizes</Typography>
            <Row center gap={16}>
              <Spinner color='black' size='sm' />
              <Spinner color='black' size='md' />
              <Spinner color='black' size='lg' />
              <Spinner color='black' size='lg' />
            </Row>
          </Block>

          {/* Different Colors */}
          <Block gap={8}>
            <Typography>Spinner Colors</Typography>
            <Row center gap={16}>
              <Spinner color='black' size='md' />
              <Spinner color='rose_500' secondaryColor='purple_300' size='md' />
              <Spinner color='blue_500' size='md' />
              <Spinner color='green_500' size='md' />
            </Row>
          </Block>

          {/* Different Speeds */}
          <Block gap={8}>
            <Typography>Spinner Speeds</Typography>
            <Row center gap={16}>
              <Spinner color='black' duration={500} size='md' />
              <Spinner color='black' size='md' />
              <Spinner color='black' duration={2000} size='md' />
            </Row>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(SpinnerComponent, 'Spinner')

export default function ExampleSpinner(): React.JSX.Element {
  return <Root />
}
