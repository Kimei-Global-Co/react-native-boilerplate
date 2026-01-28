import { useState } from 'react'
import { TextInput as RNTextInput, StyleSheet } from 'react-native'

import Colors from '@theme/colors'
import Block from '../block'
import Icon from '../icon'
import Row from '../row'
import Typography from '../typography'
import { type TextInputBaseProps } from './input.type'
export default function TextInput(
  props: TextInputBaseProps & { ref?: React.Ref<RNTextInput> }
): React.JSX.Element {
  const {
    containerStyle,
    inputStyle,
    labelStyle,
    errorStyle,
    mode = 'default',
    label,
    error,
    leftIcon,
    rightIcon,
    clearable = false,
    focusColor = 'blue_400',
    helper,
    required = false,
    value: externalValue,
    onChangeText: externalOnChangeText,
    ref,
    ...rest
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [secureEntry, setSecureEntry] = useState(mode === 'password')
  const [internalValue, setInternalValue] = useState('')

  const isControlled = externalValue !== undefined
  const value = isControlled ? externalValue : internalValue

  const handleChangeText = (text: string) => {
    if (!isControlled) {
      setInternalValue(text)
    }
    externalOnChangeText?.(text)
  }

  const handleFocus = (): void => setIsFocused(true)
  const handleBlur = (): void => setIsFocused(false)

  const handleClear = (): void => handleChangeText('')

  const toggleSecureEntry = (): void => setSecureEntry((prev) => !prev)

  const containerStyles = [
    styles.container,
    isFocused && { borderColor: focusColor },
    error && styles.error,
    containerStyle
  ]

  const inputStyles = [styles.input, inputStyle]

  const renderRightIcon = () => {
    if (rightIcon) return rightIcon
    if (mode === 'password') {
      return (
        <Icon
          name={secureEntry ? 'eye-off' : 'eye'}
          onPress={toggleSecureEntry}
          size={18}
          type={'feather'}
        />
      )
    }
    if (clearable && value) {
      return (
        <Icon
          name='clear'
          onPress={handleClear}
          size={18}
          type='materialIcons'
        />
      )
    }
    return null
  }

  const labelComponent = label && (
    <Typography
      color={error ? 'rose_400' : 'black'}
      style={[styles.label, labelStyle]}
    >
      {label}
      {required && <Typography color='rose_400'> *</Typography>}
    </Typography>
  )

  const helperComponent = (error || helper) && (
    <Typography
      color={error ? 'rose_400' : 'gray_400'}
      size={12}
      style={[styles.helper, errorStyle]}
    >
      {error ?? helper}
    </Typography>
  )

  return (
    <Block>
      {labelComponent}
      <Row style={containerStyles}>
        {leftIcon && <Block margin={{ left: 12 }}>{leftIcon}</Block>}

        <RNTextInput
          ref={ref}
          {...rest}
          accessibilityHint={helper}
          accessibilityLabel={`${label}${required ? ' required' : ''}`}
          accessibilityRole='none'
          accessibilityState={{
            disabled: rest.editable === false
          }}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          // placeholderTextColor={theme.colors.gray_400}
          secureTextEntry={secureEntry}
          style={inputStyles}
          value={value}
        />
        {renderRightIcon && (
          <Block margin={{ right: 12 }}>{renderRightIcon()}</Block>
        )}
      </Row>
      {helperComponent}
    </Block>
  )
}

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
    borderColor: Colors.rose_400
  },
  helper: {
    marginTop: 4
  },
  input: {
    color: Colors.black,
    flex: 1,
    fontSize: 16,
    height: '100%',
    paddingHorizontal: 12
  },
  label: {
    marginBottom: 4
  }
})
