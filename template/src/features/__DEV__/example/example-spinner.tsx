import { ScrollView } from 'react-native'

import { Block, Header, Row, Spinner, Text } from '@components'

import { createContainer } from '../create-container'

const SpinnerComponent = (): React.JSX.Element => {
  return (
    <Block flex={1}>
      <Header isBack title='Spinner Component' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={16} padding={16}>
          {/* Different Sizes */}
          <Block gap={8}>
            <Text>Spinner Sizes</Text>
            <Row center gap={16}>
              <Spinner color='black' size='small' />
              <Spinner color='black' size='medium' />
              <Spinner color='black' size='large' />
              <Spinner color='black' size={40} />
            </Row>
          </Block>

          {/* Different Colors */}
          <Block gap={8}>
            <Text>Spinner Colors</Text>
            <Row center gap={16}>
              <Spinner color='black' size='medium' />
              <Spinner color='rose_500' size='medium' />
              <Spinner color='blue_500' size='medium' />
              <Spinner color='green_500' size='medium' />
            </Row>
          </Block>

          {/* Different Speeds */}
          <Block gap={8}>
            <Text>Spinner Speeds</Text>
            <Row center gap={16}>
              <Spinner color='black' durationMs={500} size='medium' />
              <Spinner color='black' durationMs={1000} size='medium' />
              <Spinner color='black' durationMs={2000} size='medium' />
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
