import {
  Keyboard,
  KeyboardAvoidingView,
  type KeyboardAvoidingViewProps,
  Platform,
  Pressable
} from 'react-native'

const DEFAULT_BEHAVIOR = Platform.OS === 'ios' ? 'padding' : 'height'

export function KeyboardDismiss(
  props: Readonly<KeyboardAvoidingViewProps>
): React.JSX.Element {
  const { children, style = { flex: 1 }, behavior = DEFAULT_BEHAVIOR } = props
  return (
    <Pressable accessible={false} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={behavior}
        keyboardVerticalOffset={-150}
        style={style}
      >
        {children}
      </KeyboardAvoidingView>
    </Pressable>
  )
}
