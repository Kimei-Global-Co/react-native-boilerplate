import { useState } from 'react'
import { StyleSheet, Text } from 'react-native'

import Block from '@components/base/block'
import Header from '@components/base/header'
import Switch from '@components/base/switch'

import { createContainer } from '../create-container'

const styles = StyleSheet.create({
  description: {
    color: '#333',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center'
  }
})

const SwitchComponent = (): React.JSX.Element => {
  const [isToggle1, setIsToggle1] = useState(true)
  const [isToggle2, setIsToggle2] = useState(false)
  const [isToggle3, setIsToggle3] = useState(true)
  const [isToggle4, setIsToggle4] = useState(false)

  return (
    <>
      <Header isBack title='Switch Examples' />
      <Block align='center' gap={20} justify='center' padding={20}>
        <Text style={styles.description}>Default Switch (Enabled)</Text>
        <Switch onValueChange={setIsToggle1} value={isToggle1} />

        <Text style={styles.description}>Disabled Switch</Text>
        <Switch disabled onValueChange={setIsToggle1} value={isToggle1} />

        <Text style={styles.description}>Blue Thumb Color</Text>
        <Switch
          onValueChange={setIsToggle2}
          thumbColor={{ active: 'blue_500', inActive: 'lightBlue_500' }}
          value={isToggle2}
        />

        <Text style={styles.description}>Larger Track and Thumb (80x32)</Text>
        <Switch
          onValueChange={setIsToggle3}
          thumbWidth={32}
          trackWidth={80}
          value={isToggle3}
        />

        <Text style={styles.description}>
          Custom Colors and Smaller Size (40x20)
        </Text>
        <Switch
          onValueChange={setIsToggle4}
          thumbColor={{ active: 'white', inActive: 'gray_50' }}
          thumbWidth={20}
          trackColor={{ active: 'green_500', inActive: 'whiteEC' }}
          trackWidth={40}
          value={isToggle4}
        />
      </Block>
    </>
  )
}

const Root = createContainer(SwitchComponent, 'Switch')

export default function ExampleSwitch(): React.JSX.Element {
  return <Root />
}
