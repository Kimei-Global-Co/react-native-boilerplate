import { ActivityIndicator, StyleSheet } from 'react-native'

import Animated, { FadeInLeft, FadeOutUp } from 'react-native-reanimated'
import { useButtonContext } from './button.context'

export function ButtonPending(): React.JSX.Element | null {
  const { state } = useButtonContext('Button.Pending')
  if (state !== 'pending') {
    return null
  }
  return (
    <Animated.View
      entering={FadeInLeft}
      exiting={FadeOutUp}
      style={styles.pendingView}
    >
      <ActivityIndicator color='white' size='small' />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  pendingView: {
    height: 24,
    width: 24
  }
})
