import { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { Header } from '@components/ui/patterns/header/header.index'
import { Block } from '@components/ui/primitives/block/block.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Input } from '@components/ui/primitives/input/input.index'
import { Row } from '@components/ui/primitives/row/row.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { useDebounce } from 'shared/hooks/use-debounce'
import { useDebounceFn } from 'shared/hooks/use-debounce-fn'
import { useThrottleFn } from 'shared/hooks/use-throttle-fn'
import { createContainer } from '../create-container'

const WAIT_MS = 800
const BURST_SIZE = 5

const DebounceThrottleComponent = (): React.JSX.Element => {
  const [query, setQuery] = useState('')

  const debouncedQuery = useDebounce(query, { wait: WAIT_MS })

  const [debounceAttempts, setDebounceAttempts] = useState(0)
  const [debounceExecutions, setDebounceExecutions] = useState(0)
  const [debounceLastValue, setDebounceLastValue] = useState('No execution yet')

  const {
    run: runDebounced,
    cancel: cancelDebounced,
    flush: flushDebounced
  } = useDebounceFn(
    (value) => {
      setDebounceExecutions((count) => count + 1)
      setDebounceLastValue(value as string)
    },
    { wait: WAIT_MS }
  )

  const [throttleAttempts, setThrottleAttempts] = useState(0)
  const [throttleExecutions, setThrottleExecutions] = useState(0)
  const [throttleLastValue, setThrottleLastValue] = useState('No execution yet')

  const {
    run: runThrottled,
    cancel: cancelThrottled,
    flush: flushThrottled
  } = useThrottleFn(
    (value: string) => {
      setThrottleExecutions((count) => count + 1)
      setThrottleLastValue(value)
    },
    { wait: WAIT_MS }
  )

  const triggerDebounceBurst = () => {
    setDebounceAttempts((count) => count + BURST_SIZE)

    for (let index = 1; index <= BURST_SIZE; index += 1) {
      runDebounced(`Debounce call ${Date.now()}-${index}`)
    }
  }

  const triggerThrottleBurst = () => {
    setThrottleAttempts((count) => count + BURST_SIZE)

    for (let index = 1; index <= BURST_SIZE; index += 1) {
      runThrottled(`Throttle call ${Date.now()}-${index}`)
    }
  }

  return (
    <Block flex={true}>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Debounce & Throttle</Header.Title>
        </Header.Section>
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={16} padding={16}>
          <Block
            backgroundColor='white'
            gap={12}
            padding={16}
            radius={12}
            shadow={true}
          >
            <Typography fontToken='font.heading.small'>useDebounce</Typography>
            <Typography color='gray_400'>
              Type below. The debounced value should update after {WAIT_MS}ms of
              inactivity.
            </Typography>
            <Input
              clearable={true}
              leftIcon='search'
              onChangeText={setQuery}
              placeholder='Type to verify delayed updates'
              value={query}
            />
            <Typography>Immediate value: {query || 'empty'}</Typography>
            <Typography>
              Debounced value: {debouncedQuery || 'empty'}
            </Typography>
          </Block>

          <Block
            backgroundColor='white'
            gap={12}
            padding={16}
            radius={12}
            shadow={true}
          >
            <Typography fontToken='font.heading.small'>
              useDebounceFn
            </Typography>
            <Typography color='gray_400'>
              Tap burst a few times quickly. Executions should collapse to the
              latest call unless you flush manually.
            </Typography>
            <Typography>Attempts queued: {debounceAttempts}</Typography>
            <Typography>Executions: {debounceExecutions}</Typography>
            <Typography>Last payload: {debounceLastValue}</Typography>
            <Row gap={8} wrap={true}>
              <Button
                onPress={triggerDebounceBurst}
                style={styles.button}
                title='Burst x5'
              />
              <Button
                onPress={flushDebounced}
                style={styles.button}
                title='Flush'
              />
              <Button
                onPress={cancelDebounced}
                style={styles.button}
                title='Cancel'
              />
            </Row>
          </Block>

          <Block
            backgroundColor='white'
            gap={12}
            padding={16}
            radius={12}
            shadow={true}
          >
            <Typography fontToken='font.heading.small'>
              useThrottleFn
            </Typography>
            <Typography color='gray_400'>
              Tap burst a few times quickly. With throttle, one call should run
              immediately and the latest queued call should run after {WAIT_MS}
              ms.
            </Typography>
            <Typography>Attempts queued: {throttleAttempts}</Typography>
            <Typography>Executions: {throttleExecutions}</Typography>
            <Typography>Last payload: {throttleLastValue}</Typography>
            <Row gap={8} wrap={true}>
              <Button
                onPress={triggerThrottleBurst}
                style={styles.button}
                title='Burst x5'
              />
              <Button
                onPress={flushThrottled}
                style={styles.button}
                title='Flush'
              />
              <Button
                onPress={cancelThrottled}
                style={styles.button}
                title='Cancel'
              />
            </Row>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(DebounceThrottleComponent, 'DebounceThrottle')

export function ExampleDebounceThrottle(): React.JSX.Element {
  return <Root />
}

const styles = StyleSheet.create({
  button: {
    minWidth: 110
  }
})
