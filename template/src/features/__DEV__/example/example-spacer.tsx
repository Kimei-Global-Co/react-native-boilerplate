import { ScrollView, StyleSheet } from 'react-native'

import { Block, Header, Row, Spacer, Text } from '@components'

import { createContainer } from '../create-container'

const BoxDemo = (): React.JSX.Element => (
  <Block backgroundColor='blue_500' style={style.container} />
)

const SpacerComponent = (): React.JSX.Element => {
  return (
    <Block flex={1}>
      <Header isBack title='Spacer Component' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block padding={16}>
          {/* Vertical Spacing Demo */}
          <Block gap={8}>
            <Text>Vertical Spacing (y prop)</Text>
            <BoxDemo />
            <Spacer y={8} />
            <BoxDemo />
            <Spacer y={16} />
            <BoxDemo />
            <Spacer y={24} />
            <BoxDemo />
          </Block>

          <Spacer y={32} />

          {/* Horizontal Spacing Demo */}
          <Block gap={8}>
            <Text>Horizontal Spacing (x prop)</Text>
            <Row>
              <BoxDemo />
              <Spacer x={8} />
              <BoxDemo />
              <Spacer x={16} />
              <BoxDemo />
            </Row>
          </Block>

          <Spacer y={32} />

          {/* Combined X and Y Spacing */}
          <Block gap={8}>
            <Text>Combined X and Y Spacing</Text>
            <Row>
              <BoxDemo />
              <Spacer x={16} y={16} />
              <BoxDemo />
            </Row>
            <Spacer y={16} />
            <Row>
              <BoxDemo />
              <Spacer x={24} y={24} />
              <BoxDemo />
            </Row>
          </Block>

          {/* Default Theme Spacing */}
          <Block gap={8}>
            <Text>Default Theme Spacing</Text>
            <BoxDemo />
            <Spacer />
            <BoxDemo />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(SpacerComponent, 'Spacer')

export default function ExampleSpacer(): React.JSX.Element {
  return <Root />
}

const style = StyleSheet.create({
  container: {
    width: 50,
    height: 50
  }
})
