import { ScrollView } from 'react-native'

import Block from '@components/base/block'
import Button from '@components/base/button'
import Header from '@components/base/header'
import Typography from '@components/base/typography'
import { createContainer } from '../create-container'

const ButtonComponent = (): React.JSX.Element => {
  return (
    <Block flex>
      <Header isBack title='Button component' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={16} padding={16}>
          {/* Variants */}
          <Block gap={8}>
            <Typography>Button Variants</Typography>
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
            <Typography>Button Colors</Typography>
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
            <Typography>Button Sizes</Typography>
            <Button onPress={() => {}} size='small' text='Small Button' />
            <Button onPress={() => {}} size='medium' text='Medium Button' />
            <Button onPress={() => {}} size='large' text='Large Button' />
          </Block>

          {/* States */}
          <Block gap={8}>
            <Typography>Button States</Typography>
            <Button disabled onPress={() => {}} text='Disabled Button' />
            <Button loading onPress={() => {}} text='Loading Button' />
          </Block>

          {/* Custom Styling */}
          <Block gap={8}>
            <Typography>Custom Styling</Typography>
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
            <Typography>Button with Children</Typography>
            <Button onPress={() => {}}>
              <Typography color='white'>Custom Children Content</Typography>
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
