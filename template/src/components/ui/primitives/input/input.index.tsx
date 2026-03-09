import {
  createContext,
  use,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import {
  TextInput as RNTextInput,
  StyleSheet,
  type ViewStyle
} from 'react-native'

import type { IconName } from '@assets/icons'
import { Block } from '@components/ui/primitives/block/block.index'
import { Icon } from '@components/ui/primitives/icon/icon.index'
import { Row } from '@components/ui/primitives/row/row.index'
import { Colors } from '@theme/colors'
import type { InputFieldProps, InputIconProps, InputProps } from './input.type'

interface InputContextValue {
  isFocused: boolean
  setIsFocused: (focused: boolean) => void
  secureEntry: boolean
  setSecureEntry: (secure: boolean | ((prev: boolean) => boolean)) => void
  internalValue: string
  setInternalValue: (text: string) => void
  inputRef: React.RefObject<RNTextInput | null>
}

const InputContext = createContext<InputContextValue | undefined>(undefined)

export function useInputContext(componentName: string) {
  const context = use(InputContext)
  if (!context) {
    throw new Error(
      `${componentName} must be used within an <Input /> component.`
    )
  }
  return context
}

function Input({ ref, children, ...props }: Readonly<InputProps>) {
  const {
    inputStyle,
    error,
    leftIcon,
    rightIcon,
    clearable = false,
    focusColor = 'blue_400',
    value: externalValue,
    defaultValue: externalDefaultValue,
    onChangeText: externalOnChangeText,
    onFocus,
    onBlur,
    style,
    secureTextEntry: isInitialSecure,
    ...rest
  } = props

  const inputRef = useRef<RNTextInput>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [secureEntry, setSecureEntry] = useState(isInitialSecure ?? false)
  const [internalValue, setInternalValue] = useState(
    externalValue ?? externalDefaultValue ?? ''
  )

  useImperativeHandle(ref, () => inputRef.current as RNTextInput)

  useEffect(() => {
    if (externalValue !== undefined && externalValue !== internalValue) {
      setInternalValue(externalValue)
      inputRef.current?.setNativeProps({ text: externalValue })
    }
  }, [externalValue, internalValue])

  const onValueChange = (text: string) => {
    setInternalValue(text)
    externalOnChangeText?.(text)
  }

  const contextValue = {
    inputRef,
    internalValue,
    isFocused,
    secureEntry,
    setInternalValue: onValueChange,
    setIsFocused,
    setSecureEntry
  }

  const containerStyles = StyleSheet.flatten<ViewStyle>([
    styles.container,
    isFocused && {
      borderColor: Colors[focusColor as keyof typeof Colors] ?? focusColor
    },
    error && styles.error,
    style
  ])

  const defaultContent = (
    <Row style={containerStyles}>
      <InputIcon position='left'>{leftIcon}</InputIcon>

      <InputField
        {...rest}
        defaultValue={externalDefaultValue ?? externalValue}
        onBlur={(e) => {
          setIsFocused(false)
          onBlur?.(e)
        }}
        onFocus={(e) => {
          setIsFocused(true)
          onFocus?.(e)
        }}
        secureTextEntry={secureEntry}
        style={[styles.input, inputStyle]}
      />

      {rightIcon ? (
        <InputIcon position='right'>{rightIcon}</InputIcon>
      ) : (
        <>
          {isInitialSecure && <InputVisibilityToggle />}
          {clearable && !isInitialSecure && <InputClearButton />}
        </>
      )}
    </Row>
  )

  return (
    <InputContext.Provider value={contextValue}>
      {children ?? defaultContent}
    </InputContext.Provider>
  )
}

function InputField({ style, ...props }: Readonly<InputFieldProps>) {
  const {
    inputRef,
    secureEntry,
    setIsFocused,
    setInternalValue,
    internalValue
  } = useInputContext('Input.Field')

  const finalDefaultValue =
    props.defaultValue ?? (props.value ? undefined : internalValue)

  return (
    <RNTextInput
      defaultValue={finalDefaultValue}
      onBlur={(e) => {
        setIsFocused(false)
        props.onBlur?.(e)
      }}
      onChangeText={(text) => {
        setInternalValue(text)
        props.onChangeText?.(text)
      }}
      onFocus={(e) => {
        setIsFocused(true)
        props.onFocus?.(e)
      }}
      ref={inputRef}
      secureTextEntry={props.secureTextEntry ?? secureEntry}
      style={[styles.input, style]}
      {...props}
    />
  )
}

function InputIcon({ children, position, style }: Readonly<InputIconProps>) {
  if (!children) {
    return null
  }

  const content =
    typeof children === 'string' ? (
      <Icon name={children as IconName<'feather'>} size={18} type='feather' />
    ) : (
      children
    )

  return (
    <Block
      margin={position === 'left' ? { left: 12 } : { right: 12 }}
      style={style}
    >
      {content}
    </Block>
  )
}

function InputVisibilityToggle() {
  const { secureEntry, setSecureEntry } = useInputContext(
    'Input.VisibilityToggle'
  )
  return (
    <InputIcon position='right'>
      <Icon
        name={secureEntry ? 'eye-off' : 'eye'}
        onPress={() => setSecureEntry(!secureEntry)}
        size={18}
        type='feather'
      />
    </InputIcon>
  )
}

function InputClearButton() {
  const { internalValue, setInternalValue, inputRef } =
    useInputContext('Input.ClearButton')

  if (!internalValue) {
    return null
  }

  return (
    <InputIcon position='right'>
      <Icon
        name='clear'
        onPress={() => {
          inputRef.current?.clear()
          setInternalValue('')
        }}
        size={18}
        type='materialIcons'
      />
    </InputIcon>
  )
}

export { Input, InputField, InputIcon, InputClearButton, InputVisibilityToggle }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.gray_400,
    borderRadius: 10,
    borderWidth: 1,
    height: 48
  },
  error: {
    borderColor: Colors.red_600
  },
  input: {
    color: Colors.black,
    flex: 1,
    fontSize: 16,
    height: '100%',
    paddingHorizontal: 12
  }
})
