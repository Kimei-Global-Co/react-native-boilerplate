import {
  createContext,
  use,
  useEffect,
  useEffectEvent,
  useImperativeHandle
} from 'react'
import {
  TextInput as RNTextInput,
  StyleSheet,
  type TextInputChangeEvent,
  type ViewStyle
} from 'react-native'

import type { IconName } from '@assets/icons'
import { Block } from '@components/ui/primitives/block/block.index'
import { Icon } from '@components/ui/primitives/icon/icon.index'
import { Row } from '@components/ui/primitives/row/row.index'
import { Colors } from '@theme/colors'
import Animated, {
  dispatchCommand,
  FadeIn,
  FadeOut,
  type ReanimatedEvent,
  useAnimatedRef,
  useEvent,
  useHandler
} from 'react-native-reanimated'
import { useMutative } from 'shared/hooks/use-mutative'
import type { InputFieldProps, InputIconProps, InputProps } from './input.type'

interface InputContextValue {
  isFocused: boolean
  setIsFocused: (focused: boolean) => void
  secureEntry: boolean
  setSecureEntry: (secure: boolean | ((prev: boolean) => boolean)) => void
  internalValue: string
  setInternalValue: (text: string) => void
  inputRef: React.RefObject<RNTextInput | null>
  onUIChange?: (event: TextInputChangeEvent) => void
}

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput)

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
    editable = true,
    focusColor = 'blue_400',
    value: externalValue,
    defaultValue: externalDefaultValue,
    onChangeText: externalOnChangeText,
    onFocus,
    onBlur,
    style,
    secureTextEntry: isInitialSecure,
    formatter,
    ...rest
  } = props

  const inputRef = useAnimatedRef<RNTextInput>()
  const [isFocused, setIsFocused] = useMutative(false)
  const [secureEntry, setSecureEntry] = useMutative(isInitialSecure ?? false)
  const [internalValue, setInternalValue] = useMutative(
    externalValue ?? externalDefaultValue ?? ''
  )

  useImperativeHandle(ref, () => inputRef.current as RNTextInput)

  const onChangeInternal = useEffectEvent((text: string) => {
    setInternalValue(text)
  })

  useEffect(() => {
    if (externalValue !== undefined && externalValue !== internalValue) {
      onChangeInternal(externalValue)
      inputRef.current?.setNativeProps({ text: externalValue })
    }
  }, [externalValue, internalValue, inputRef])

  const onValueChange = (text: string) => {
    setInternalValue(text)
    externalOnChangeText?.(text)
  }

  const handlers = {
    onChange: (_event: ReanimatedEvent<TextInputChangeEvent>) => {
      'worklet'
    }
  }

  const { doDependenciesDiffer } = useHandler(handlers)

  const onUIChange = useEvent<TextInputChangeEvent>(
    (event) => {
      'worklet'
      const { onChange } = handlers
      if (formatter) {
        const text = event.text
        const formattedText = formatter(text)
        if (formattedText !== text) {
          dispatchCommand(inputRef, 'setTextAndSelection', [
            event.eventCount,
            formattedText,
            formattedText.length,
            formattedText.length
          ])
        }
      }
      if (onChange) {
        onChange(event)
      }
    },
    ['onChange'],
    doDependenciesDiffer
  )

  const contextValue = {
    inputRef,
    internalValue,
    isFocused,
    onUIChange: formatter ? onUIChange : undefined,
    secureEntry,
    setInternalValue: onValueChange,
    setIsFocused,
    setSecureEntry
  }

  const containerStyles = StyleSheet.flatten<ViewStyle>([
    styles.container,
    isFocused && {
      borderColor: Colors[focusColor] ?? focusColor
    },
    error && styles.error,
    style
  ])

  const defaultContent = (
    <Row align='center' style={containerStyles}>
      <InputIcon position='left'>{leftIcon}</InputIcon>

      <InputField
        {...rest}
        defaultValue={externalDefaultValue ?? externalValue}
        editable={editable}
        formatter={formatter}
        onBlur={onBlur}
        onFocus={onFocus}
        secureTextEntry={secureEntry}
        style={[styles.input, inputStyle]}
      />

      {rightIcon ? (
        <InputIcon position='right'>{rightIcon}</InputIcon>
      ) : (
        <>
          {clearable && <InputClearButton />}
          {isInitialSecure && <InputVisibilityToggle />}
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

function InputField({ style, formatter, ...props }: Readonly<InputFieldProps>) {
  const {
    inputRef,
    secureEntry,
    setIsFocused,
    setInternalValue,
    internalValue,
    onUIChange
  } = useInputContext('Input.Field')

  const finalDefaultValue =
    props.defaultValue ?? (props.value ? undefined : internalValue)

  return (
    <AnimatedTextInput
      {...props}
      autoCapitalize='none'
      autoCorrect={false}
      defaultValue={finalDefaultValue}
      onBlur={(e) => {
        setIsFocused(false)
        props.onBlur?.(e)
      }}
      onChange={onUIChange || props.onChange}
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
      spellCheck={false}
      style={[styles.input, style]}
      textAlignVertical='center'
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
      margin={position === 'left' ? { right: 8 } : { left: 8 }}
      style={style}
    >
      {content}
    </Block>
  )
}

function InputVisibilityToggle() {
  const { secureEntry, setSecureEntry, isFocused, internalValue } =
    useInputContext('Input.VisibilityToggle')

  if (!isFocused || !internalValue) {
    return null
  }

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <InputIcon position='right'>
        <Icon
          accessibilityLabel={secureEntry ? 'Show password' : 'Hide password'}
          accessibilityRole='button'
          name={secureEntry ? 'eye-off' : 'eye'}
          onPress={() => setSecureEntry(!secureEntry)}
          size={18}
          type='feather'
        />
      </InputIcon>
    </Animated.View>
  )
}

function InputClearButton() {
  const { internalValue, setInternalValue, inputRef, isFocused } =
    useInputContext('Input.ClearButton')

  if (!isFocused || !internalValue) {
    return null
  }

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <InputIcon position='right'>
        <Icon
          accessibilityLabel='Clear input content'
          accessibilityRole='button'
          name='clear'
          onPress={() => {
            inputRef.current?.clear()
            setInternalValue('')
          }}
          size={18}
          type='materialIcons'
        />
      </InputIcon>
    </Animated.View>
  )
}

export { Input, InputField, InputIcon, InputClearButton, InputVisibilityToggle }

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.gray_400,
    borderRadius: 10,
    borderWidth: 1,
    height: 48,
    paddingHorizontal: 12
  },
  error: {
    borderColor: Colors.red_600
  },
  input: {
    color: Colors.black,
    flex: 1,
    fontSize: 16,
    height: '100%',
    margin: 0,
    padding: 0
  }
})
