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
            <Button onPress={() => {}} text='Solid Button' variant='solid' />
            <Button
              onPress={() => {}}
              text='Outline Button'
              variant='outline'
            />
            <Button
              onPress={() => {}}
              text='Bordered Button'
              variant='bordered'
            />
            <Button onPress={() => {}} text='Shadow Button' variant='shadow' />
          </Block>

          {/* Colors */}
          <Block gap={8}>
            <Text>Button Colors</Text>
            <Button color='primary' onPress={() => {}} text='Primary Button' />
            <Button
              color='secondary'
              onPress={() => {}}
              text='Secondary Button'
            />
            <Button color='success' onPress={() => {}} text='Success Button' />
            <Button color='warning' onPress={() => {}} text='Warning Button' />
            <Button color='error' onPress={() => {}} text='Error Button' />
          </Block>

          {/* Sizes */}
          <Block gap={8}>
            <Text>Button Sizes</Text>
            <Button onPress={() => {}} size='small' text='Small Button' />
            <Button onPress={() => {}} size='medium' text='Medium Button' />
            <Button onPress={() => {}} size='large' text='Large Button' />
          </Block>

          {/* States */}
          <Block gap={8}>
            <Text>Button States</Text>
            <Button disabled onPress={() => {}} text='Disabled Button' />
            <Button loading onPress={() => {}} text='Loading Button' />
          </Block>

          {/* Custom Styling */}
          <Block gap={8}>
            <Text>Custom Styling</Text>
            <Button
              borderColor='#FF5733'
              borderRadius={25}
              borderWidth={2}
              onPress={() => {}}
              style={{ backgroundColor: '#FFC300' }}
              text='Custom Button'
              textStyle={{ color: '#900C3F' }}
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
