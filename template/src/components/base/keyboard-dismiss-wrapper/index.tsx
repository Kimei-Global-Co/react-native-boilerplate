import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ViewStyle
} from 'react-native'

type KeyboardDismissWrapperProps = {
  children: React.ReactNode
  style?: ViewStyle
  behavior?: 'height' | 'position' | 'padding'
}

const KeyboardDismissWrapper: React.FC<KeyboardDismissWrapperProps> = ({
  children,
  style = { flex: 1 },
  behavior = Platform.OS === 'ios' ? 'padding' : 'height'
}) => {
  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={behavior}
        keyboardVerticalOffset={-150}
        style={style}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default KeyboardDismissWrapper
