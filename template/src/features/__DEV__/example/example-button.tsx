import { ScrollView } from 'react-native'

import { Block, Button, Header, Text } from '@components'

import { createContainer } from '../create-container'

const ButtonComponent = (): React.JSX.Element => {
  return (
    <Block flex={1}>
      <Header isBack title={'Button component'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={16} padding={16}>
          {/* Variants */}
          <Block gap={8}>
            <Text>Button Variants</Text>
            <Button text='Solid Button' variant='solid' onPress={() => {}} />
            <Button
              text='Outline Button'
              variant='outline'
              onPress={() => {}}
            />
            <Button
              text='Bordered Button'
              variant='bordered'
              onPress={() => {}}
            />
            <Button text='Shadow Button' variant='shadow' onPress={() => {}} />
          </Block>

          {/* Colors */}
          <Block gap={8}>
            <Text>Button Colors</Text>
            <Button color='primary' text='Primary Button' onPress={() => {}} />
            <Button
              color='secondary'
              text='Secondary Button'
              onPress={() => {}}
            />
            <Button color='success' text='Success Button' onPress={() => {}} />
            <Button color='warning' text='Warning Button' onPress={() => {}} />
            <Button color='error' text='Error Button' onPress={() => {}} />
          </Block>

          {/* Sizes */}
          <Block gap={8}>
            <Text>Button Sizes</Text>
            <Button size='small' text='Small Button' onPress={() => {}} />
            <Button size='medium' text='Medium Button' onPress={() => {}} />
            <Button size='large' text='Large Button' onPress={() => {}} />
          </Block>

          {/* States */}
          <Block gap={8}>
            <Text>Button States</Text>
            <Button disabled text='Disabled Button' onPress={() => {}} />
            <Button loading text='Loading Button' onPress={() => {}} />
          </Block>

          {/* Custom Styling */}
          <Block gap={8}>
            <Text>Custom Styling</Text>
            <Button
              borderColor='#FF5733'
              borderRadius={25}
              borderWidth={2}
              style={{ backgroundColor: '#FFC300' }}
              text='Custom Button'
              textStyle={{ color: '#900C3F' }}
              onPress={() => {}}
            />
          </Block>

          {/* With Children */}
          <Block gap={8}>
            <Text>Button with Children</Text>
            <Button onPress={() => {}}>
              <Text color='white'>Custom Children Content</Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(ButtonComponent, 'Button')

export default function ExampleButton(): React.JSX.Element {
  return <Root />
}
