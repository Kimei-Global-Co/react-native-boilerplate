import {
  Keyboard,
  KeyboardAvoidingView,
  type KeyboardAvoidingViewProps,
  Platform,
  TouchableWithoutFeedback
} from 'react-native'

export default function KeyboardDismissWrapper(
  props: KeyboardAvoidingViewProps
): React.JSX.Element {
  const {
    children,
    style = { flex: 1 },
    behavior = Platform.OS === 'ios' ? 'padding' : 'height'
  } = props
  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={behavior}
        keyboardVerticalOffset={-150}
        style={style}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
