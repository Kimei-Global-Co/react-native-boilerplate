import { forwardRef, useCallback, useMemo, useState } from 'react'
import { TextInput as RNTextInput, StyleSheet } from 'react-native'

import { theme } from '@theme'

import { Block } from '../block'
import Icon from '../icon'
import Row from '../row'
import { Text } from '../text'
import { TextInputBaseProps } from './type'

export const TextInput = forwardRef<RNTextInput, TextInputBaseProps>(
  (props, ref) => {
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
      focusColor = theme.colors.blue_400,
      helper,
      required = false,
      value: externalValue,
      onChangeText: externalOnChangeText,
      ...rest
    } = props

    const [isFocused, setIsFocused] = useState(false)
    const [secureEntry, setSecureEntry] = useState(mode === 'password')
    const [internalValue, setInternalValue] = useState('')

    const isControlled = externalValue !== undefined
    const value = isControlled ? externalValue : internalValue

    const handleChangeText = useCallback(
      (text: string) => {
        if (!isControlled) {
          setInternalValue(text)
        }
        externalOnChangeText?.(text)
      },
      [isControlled, externalOnChangeText]
    )

    const handleFocus = (): void => setIsFocused(true)
    const handleBlur = (): void => setIsFocused(false)
    const handleClear = useCallback(
      () => handleChangeText(''),
      [handleChangeText]
    )
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const toggleSecureEntry = (): void => setSecureEntry((prev) => !prev)

    const containerStyles = useMemo(
      () => [
        styles.container,
        isFocused && { borderColor: focusColor },
        error && styles.error,
        containerStyle
      ],
      [isFocused, focusColor, error, containerStyle]
    )

    const inputStyles = useMemo(() => [styles.input, inputStyle], [inputStyle])

    const renderRightIcon = useMemo(() => {
      if (rightIcon) return rightIcon
      if (mode === 'password') {
        return (
          <Icon
            name={secureEntry ? 'eye-off' : 'eye'}
            size={18}
            type={'feather'}
            onPress={toggleSecureEntry}
          />
        )
      }
      if (clearable && value) {
        return (
          <Icon
            name='clear'
            size={18}
            type='materialIcons'
            onPress={handleClear}
          />
        )
      }
      return null
    }, [
      rightIcon,
      mode,
      secureEntry,
      clearable,
      value,
      toggleSecureEntry,
      handleClear
    ])

    const labelComponent = useMemo(
      () =>
        label && (
          <Text
            color={error ? 'rose_400' : 'black'}
            style={[styles.label, labelStyle]}>
            {label}
            {required && <Text color='rose_400'> *</Text>}
          </Text>
        ),
      [label, error, labelStyle, required]
    )

    const helperComponent = useMemo(
      () =>
        (error || helper) && (
          <Text
            color={error ? 'rose_400' : 'gray_400'}
            size={12}
            style={[styles.helper, errorStyle]}>
            {error || helper}
          </Text>
        ),
      [error, helper, errorStyle]
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
            placeholderTextColor={theme.colors.gray_400}
            secureTextEntry={secureEntry}
            style={inputStyles}
            value={value}
            accessibilityState={{
              disabled: rest.editable === false
            }}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            onFocus={handleFocus}
          />
          {renderRightIcon && (
            <Block margin={{ right: 12 }}>{renderRightIcon}</Block>
          )}
        </Row>
        {helperComponent}
      </Block>
    )
  }
)

TextInput.displayName = 'TextInput'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.gray_400,
    backgroundColor: theme.colors.white
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    fontSize: 16,
    color: theme.colors.black
  },
  label: {
    marginBottom: 4
  },
  helper: {
    marginTop: 4
  },
  error: {
    borderColor: theme.colors.rose_400
  }
})
