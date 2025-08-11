import { ScrollView } from 'react-native'

import Block from '@components/base/block'
import Header from '@components/base/header'
import Row from '@components/base/row'
import Spinner from '@components/base/spinner'
import Typography from '@components/base/typography'
import { createContainer } from '../create-container'

const SpinnerComponent = (): React.JSX.Element => {
  return (
    <Block flex={1}>
      <Header isBack title='Spinner Component' />
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
