import { createContext, useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Block from '../block'
import Typography from '../typography'
import {
  type CloseTriggerProps,
  type LabelProps,
  type RootProps,
  SIZE_STYLES,
  type TagContextType,
  VARIANT_STYLES
} from './tag.type'

const TagContext = createContext<TagContextType | undefined>(undefined)

const useTagContext = (): TagContextType => {
  const context = useContext(TagContext)
  if (!context) {
    throw new Error('Tag compound components must be used within Tag.Root')
  }
  return context
}

function Tag({
  variant = 'subtle',
  size = 'sm',
  children
}: Readonly<RootProps>) {
  const variantStyle = VARIANT_STYLES[variant]
  const sizeStyle = SIZE_STYLES[size]

  return (
    <TagContext.Provider value={{ size, variant }}>
      <Block
        style={[
          styles.root,
          {
            backgroundColor: variantStyle.backgroundColor,
            borderColor: variantStyle.borderColor,
            borderWidth: variantStyle.borderWidth,
            height: sizeStyle.height,
            paddingHorizontal: sizeStyle.paddingHorizontal
          }
        ]}
      >
        {children}
      </Block>
    </TagContext.Provider>
  )
}

function Label({ children }: Readonly<LabelProps>) {
  const { variant, size } = useTagContext()
  const variantStyle = VARIANT_STYLES[variant]
  const sizeStyle = SIZE_STYLES[size]

  return (
    <Typography
      ellipsizeMode='tail'
      numberOfLines={1}
      style={{
        color: variantStyle.textColor,
        fontSize: sizeStyle.fontSize,
        lineHeight: sizeStyle.fontSize * 1.2
      }}
    >
      {children}
    </Typography>
  )
}

function EndElement({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Block style={styles.endElement}>{children}</Block>
}

function CloseTrigger({ onClose }: Readonly<CloseTriggerProps>) {
  const { variant, size } = useTagContext()
  const variantStyle = VARIANT_STYLES[variant]
  const sizeStyle = SIZE_STYLES[size]

  return (
    <TouchableOpacity
      accessibilityLabel='Close tag'
      accessibilityRole='button'
      disabled={!onClose}
      hitSlop={{ bottom: 8, left: 8, right: 8, top: 8 }}
      onPress={onClose}
      style={{ justifyContent: 'center', marginLeft: 4 }}
    >
      <Typography
        style={{
          color: variantStyle.textColor,
          fontSize: sizeStyle.fontSize * 1.5,
          fontWeight: 'bold',
          lineHeight: sizeStyle.fontSize * 1.5
        }}
      >
        ×
      </Typography>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  endElement: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4
  },
  root: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 4,
    flexDirection: 'row'
  }
})
Tag.Label = Label
Tag.EndElement = EndElement
Tag.CloseTrigger = CloseTrigger

export default Tag
