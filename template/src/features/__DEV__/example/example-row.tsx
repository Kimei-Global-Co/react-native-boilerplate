import { ScrollView, StyleSheet } from 'react-native'

import Block from '@components/ui/primitives/block/block.index'
import Header from '@components/ui/primitives/header/header.index'
import Row from '@components/ui/primitives/row/row.index'
import Typography from '@components/ui/primitives/typography/typo.index'
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
            <Typography>Basic Row</Typography>
            <Row gap={8}>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/*  Start */}
          <Block gap={8}>
            <Typography> Start</Typography>
            <Row gap={8} start>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/*  Center */}
          <Block gap={8}>
            <Typography> Center</Typography>
            <Row center gap={8}>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/*  End */}
          <Block gap={8}>
            <Typography> End</Typography>
            <Row end gap={8}>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/* Space Between */}
          <Block gap={8}>
            <Typography>Space Between</Typography>
            <Row between>
              <BoxItem bg='rose_500' />
              <BoxItem bg='blue_500' />
              <BoxItem bg='green_500' />
            </Row>
          </Block>

          {/* Combined Props */}
          <Block gap={8}>
            <Typography>Combined Props (Center + Gap + Padding)</Typography>
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
    height: 50,
    width: 50
  }
})
