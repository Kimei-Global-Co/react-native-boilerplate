import { ScrollView, StyleSheet } from 'react-native'

import { Block, Header, Row, Text } from '@components'
import type Colors from '@theme/colors'

import { createContainer } from '../create-container'

const BoxItem = ({ bg }: { bg: keyof typeof Colors }): React.JSX.Element => (
  <Block backgroundColor={bg} style={style.container} />
)

const RowComponent = (): React.JSX.Element => {
  return (
    <Block flex={1}>
      <Header isBack title='Row Component' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={24} padding={16}>
          {/* Basic Row */}
          <Block gap={8}>
            <Text>Basic Row</Text>
            <Row gap={8}>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/*  Start */}
          <Block gap={8}>
            <Text> Start</Text>
            <Row start gap={8}>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/*  Center */}
          <Block gap={8}>
            <Text> Center</Text>
            <Row center gap={8}>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/*  End */}
          <Block gap={8}>
            <Text> End</Text>
            <Row end gap={8}>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/* Space Between */}
          <Block gap={8}>
            <Text>Space Between</Text>
            <Row between>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/* Combined Props */}
          <Block gap={8}>
            <Text>Combined Props (Center + Gap + Padding)</Text>
            <Row center gap={16} padding={16}>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(RowComponent, 'Row')

export default function ExampleRow(): React.JSX.Element {
  return <Root />
}

const style = StyleSheet.create({
  container: {
    width: 50,
    height: 50
  }
})
