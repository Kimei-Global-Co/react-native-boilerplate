import { useEffect } from 'react'
import { ScrollView } from 'react-native'

import { localImage } from '@assets/images'
import Block from '@components/base/block'
import Button from '@components/base/button'
import Header from '@components/base/header'
import Image from '@components/base/image'
import Row from '@components/base/row'
import Typography from '@components/base/typography'
import { useMutative } from '@hooks/use-mutative'
import { createContainer } from '../create-container'

const noop = () => {
  //
}

const ButtonComponent = (): React.JSX.Element => {
  const [buttonState, setButtonState] = useMutative('idle', {
    enableAutoFreeze: true
  })

  useEffect(() => {
    let mounted = true

    const loop = () => {
      if (!mounted) return

      // pending -> success -> idle -> pending -> error -> idle -> repeat
      setButtonState('pending')
      const pending1 = setTimeout(() => {
        setButtonState('success')
        const successTimer = setTimeout(() => {
          setButtonState('idle')
          const idle1 = setTimeout(() => {
            setButtonState('pending')
            const pending2 = setTimeout(() => {
              setButtonState('error')
              const errorTimer = setTimeout(() => {
                setButtonState('idle')
                loop() // restart loop
              }, 2000)
              return () => clearTimeout(errorTimer)
            }, 3000)
            return () => clearTimeout(pending2)
          }, 500) // small idle gap
          return () => clearTimeout(idle1)
        }, 2000)
        return () => clearTimeout(successTimer)
      }, 3000)

      return () => clearTimeout(pending1)
    }

    loop()
    return () => {
      mounted = false
    }
  }, [setButtonState])

  return (
    <>
      <Header isBack title='Button component' />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <Block gap={16} padding={16}>
          {/* Variants */}
          <Typography>Button Variants</Typography>
          <Button
            onPress={noop}
            title='Primary Button'
            variant={{ color: 'primary', radius: 'md', size: 'md' }}
          />
          <Button
            onPress={noop}
            title='Secondary Button'
            variant={{ color: 'secondary', radius: 'md', size: 'md' }}
          />
          <Button
            onPress={noop}
            title='Bordered Button'
            variant={{ color: 'bordered', radius: 'md', size: 'md' }}
          />
          <Button
            onPress={noop}
            title='Shadow Button'
            variant={{ color: 'shadow', radius: 'md', size: 'md' }}
          />

          {/* Colors */}
          <Typography>Button Colors</Typography>
          <Button onPress={noop} title='Success Button' />
          <Button onPress={noop} state={buttonState} title='Warning Button' />
          <Button onPress={noop} state={buttonState} title='Error Button' />

          {/* Sizes */}
          <Typography>Button Sizes</Typography>
          <Button
            onPress={noop}
            title='Small Button'
            variant={{ color: 'secondary', radius: 'md', size: 'sm' }}
          />
          <Button
            onPress={noop}
            title='Medium Button'
            variant={{ color: 'secondary', radius: 'md', size: 'md' }}
          />
          <Button
            onPress={noop}
            title='Large Button'
            variant={{ color: 'secondary', radius: 'md', size: 'lg' }}
          />

          {/* States */}
          <Typography>Button States</Typography>
          <Button disabled onPress={noop} title='Disabled Button' />
          <Button onPress={noop} state='pending' title='Loading Button' />

          {/* Custom Styling */}
          <Typography>Custom Styling</Typography>
          <Button
            onPress={noop}
            style={{
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              experimental_backgroundImage:
                'linear-gradient(to top right, #ec4899, #f59e0b)'
            }}
            title='Custom Button'
          />

          {/* With Icon */}
          <Typography>Custom Icon</Typography>
          <Row align='center' gap={10} justify='center'>
            <Button
              onPress={noop}
              style={{
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                experimental_backgroundImage:
                  'linear-gradient(to top right, #ec4899, #f59e0b)',
                height: 32,
                width: 32
              }}
              title='Custom Button'
            >
              <Image size={24} source={localImage().ribbon} />
            </Button>
            <Button
              onPress={noop}
              style={{
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                experimental_backgroundImage:
                  'linear-gradient(to top right, #ec4899, #f59e0b)',
                height: 32,
                width: 32
              }}
              title='Custom Button'
            >
              <Image size={24} source={localImage().ribbon} />
            </Button>
            <Button
              onPress={noop}
              style={{
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                experimental_backgroundImage:
                  'linear-gradient(to top right, #ec4899, #f59e0b)',
                height: 32,
                width: 32
              }}
              title='Custom Button'
            >
              <Image size={24} source={localImage().ribbon} />
            </Button>
            <Button
              onPress={noop}
              style={{
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                experimental_backgroundImage:
                  'linear-gradient(to top right, #ec4899, #f59e0b)',
                height: 32,
                width: 32
              }}
              title='Custom Button'
            >
              <Image size={24} source={localImage().ribbon} />
            </Button>
          </Row>

          {/* With Children */}
          <Typography>Button with Children</Typography>
          <Button onPress={noop}>
            <Typography color='white'>Custom Children Content</Typography>
          </Button>
        </Block>
      </ScrollView>
    </>
  )
}

const Root = createContainer(ButtonComponent, 'Button')

export default function ExampleButton(): React.JSX.Element {
  return <Root />
}
