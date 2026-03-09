import { useRef } from 'react'
import type { TextInput } from 'react-native'

import { Header } from '@components/ui/patterns/header/header.index'
import { Block } from '@components/ui/primitives/block/block.index'
import {
  Input,
  InputField,
  InputIcon
} from '@components/ui/primitives/input/input.index'
import { Row } from '@components/ui/primitives/row/row.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import { createContainer } from '../create-container'

const TextInputComponent = (): React.JSX.Element => {
  const ref = useRef<TextInput>(null)

  return (
    <Block flex={true} inset={['bottom']}>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Textinput Component</Header.Title>
        </Header.Section>
      </Header>

      <KeyboardAwareScrollView
        bottomOffset={62}
        contentContainerStyle={{ gap: 10, padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Typography>Standalone Primitives</Typography>
        <Input placeholder='Simple standalone input...' />
        <Input clearable={true} placeholder='Clearable input...' />
        <Input
          clearable={true}
          placeholder='SecureTextEntry input...'
          secureTextEntry={true}
        />
        <Input clearable={true} leftIcon='search' placeholder='Search...' />
        <Input
          error={true}
          leftIcon='alert-circle'
          placeholder='Error state (border only)...'
        />
        <Input
          focusColor='rose_500'
          leftIcon='heart'
          placeholder='Custom focus color...'
        />

        <Typography>Advanced Composition</Typography>

        <Input>
          <Row backgroundColor='gray_100' padding={8} radius={8}>
            <InputField placeholder='Custom composition...' />
            <InputIcon position='right'>send</InputIcon>
          </Row>
        </Input>

        <Typography>Compound API Components</Typography>
        <Input ref={ref}>
          <InputField
            placeholder='Directly using InputField...'
            style={{ fontSize: 18 }}
          />
        </Input>

        <Typography>Synchronous Validation (UI Thread)</Typography>
        <Input
          formatter={(text) => {
            'worklet'
            // Filter out everything except letters (flicker-free)
            return text.replace(/[^a-zA-Z]+/g, '')
          }}
          placeholder='Letters only (using worklet)...'
        />

        <Input
          formatter={(text) => {
            'worklet'
            // Uppercase everything on the fly
            return text.toUpperCase()
          }}
          placeholder='Uppercase mask (UI thread)...'
        />

        <Input
          formatter={(text) => {
            'worklet'
            // Only allow numbers
            return text.replace(/[^0-9]+/g, '')
          }}
          keyboardType='numeric'
          placeholder='Numbers only (UI thread)...'
        />
      </KeyboardAwareScrollView>
    </Block>
  )
}

const Root = createContainer(TextInputComponent, 'TextInput')

export function ExampleTextInput(): React.JSX.Element {
  return <Root />
}
