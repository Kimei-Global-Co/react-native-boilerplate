import { createContext, useContext, useEffect, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'

import Animated, {
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { scheduleOnUI } from 'react-native-worklets'
import Block from '../block/block.index'
import Icon from '../icon/icon.index'
import Typography from '../typography/typo.index'
import type {
  AccordionContextType,
  AccordionItemProps,
  AccordionProps
} from './accordion.type'
import { createSplitItemStyles, createVariantStyles } from './styles'

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
)

const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion.Item must be used within Accordion')
  }
  return context
}

const Accordion = ({
  children,
  variant = 'default',
  defaultExpandedKey = '',
  style
}: AccordionProps): React.JSX.Element => {
  const [expandedKey, setExpandedKey] = useState<string | null>(
    defaultExpandedKey || null
  )

  const toggleItem = (key: string): void =>
    setExpandedKey((prev) => (prev === key ? null : key))

  const variantStyle = createVariantStyles(variant)

  const containerStyle =
    variant === 'split'
      ? [styles.container, styles.splitContainer, style]
      : [styles.container, variantStyle, style]

  return (
    <AccordionContext.Provider value={{ expandedKey, toggleItem, variant }}>
      <Block style={containerStyle}>{children}</Block>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({
  itemKey,
  title,
  children,
  style,
  isFirst = false,
  isLast = false
}: AccordionItemProps): React.JSX.Element => {
  const { expandedKey, toggleItem, variant } = useAccordion()
  const isExpanded = expandedKey === itemKey
  const contentRef = useAnimatedRef<Animated.View>()
  const height = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.get(),
    opacity: withTiming(isExpanded ? 1 : 0, { duration: 300 })
  }))

  useEffect(() => {
    if (isExpanded) {
      scheduleOnUI(() => {
        'worklet'
        const measured = measure(contentRef)
        if (measured) {
          height.set(withTiming(measured.height, { duration: 300 }))
        }
      })
    } else {
      height.set(withTiming(0, { duration: 300 }))
    }
  }, [contentRef, height, isExpanded])

  const variantStyle = createVariantStyles(variant)
  const splitItemStyle = createSplitItemStyles(variant, isFirst, isLast)

  return (
    <Block style={[styles.item, variantStyle, splitItemStyle, style]}>
      <Pressable onPress={() => toggleItem(itemKey)}>
        <Block style={styles.header}>
          <Typography>{title}</Typography>
          <Animated.View
            style={{
              transform: [{ rotate: isExpanded ? '180deg' : '0deg' }]
            }}
          >
            <Icon
              color='blue_600'
              name='chevron-circle-down'
              size={24}
              type='fontAwesome5'
            />
          </Animated.View>
        </Block>
      </Pressable>
      <Animated.View style={[styles.contentWrapper, animatedStyle]}>
        <Animated.View ref={contentRef} style={styles.content}>
          {children}
        </Animated.View>
      </Animated.View>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8
  },
  content: {
    padding: 16,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  contentWrapper: {
    overflow: 'hidden'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  item: {
    overflow: 'hidden'
  },
  splitContainer: {
    gap: 8
  }
})

Accordion.Item = AccordionItem

export default Accordion
