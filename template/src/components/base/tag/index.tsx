/* eslint-disable react-native/no-inline-styles */
import React, { createContext, useContext, useMemo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Block } from '../block'
import {
  type CloseTriggerProps,
  type LabelProps,
  type RootProps,
  SIZE_STYLES,
  type TagContextType,
  VARIANT_STYLES
} from './type'

const TagContext = createContext<TagContextType | undefined>(undefined)

const useTagContext = (): TagContextType => {
  const context = useContext(TagContext)
  if (!context) {
    throw new Error('Tag compound components must be used within Tag.Root')
  }
  return context
}

const Root: React.FC<RootProps> = ({
  variant = 'subtle',
  size = 'sm',
  children
}) => {
  const contextValue = useMemo(() => ({ variant, size }), [variant, size])

  const variantStyle = VARIANT_STYLES[variant]
  const sizeStyle = SIZE_STYLES[size]

  return (
    <TagContext.Provider value={contextValue}>
      <Block
        style={[
          styles.root,
          {
            backgroundColor: variantStyle.backgroundColor,
            borderWidth: variantStyle.borderWidth,
            borderColor: variantStyle.borderColor,
            height: sizeStyle.height,
            paddingHorizontal: sizeStyle.paddingHorizontal
          }
        ]}>
        {children}
      </Block>
    </TagContext.Provider>
  )
}

const Label: React.FC<LabelProps> = ({ children }) => {
  const { variant, size } = useTagContext()
  const variantStyle = VARIANT_STYLES[variant]
  const sizeStyle = SIZE_STYLES[size]

  return (
    <Text
      ellipsizeMode='tail'
      numberOfLines={1}
      style={{
        color: variantStyle.textColor,
        fontSize: sizeStyle.fontSize,
        lineHeight: sizeStyle.fontSize * 1.2
      }}>
      {children}
    </Text>
  )
}

const EndElement: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Block style={styles.endElement}>{children}</Block>
}

const CloseTrigger: React.FC<CloseTriggerProps> = ({ onClose }) => {
  const { variant, size } = useTagContext()
  const variantStyle = VARIANT_STYLES[variant]
  const sizeStyle = SIZE_STYLES[size]

  return (
    <TouchableOpacity
      accessibilityLabel='Close tag'
      accessibilityRole='button'
      disabled={!onClose}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={{ justifyContent: 'center', marginLeft: 4 }}
      onPress={onClose}>
      <Text
        style={{
          color: variantStyle.textColor,
          fontSize: sizeStyle.fontSize * 1.5,
          fontWeight: 'bold',
          lineHeight: sizeStyle.fontSize * 1.5
        }}>
        ×
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  endElement: {
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const Tag = {
  Root,
  Label,
  EndElement,
  CloseTrigger
}
