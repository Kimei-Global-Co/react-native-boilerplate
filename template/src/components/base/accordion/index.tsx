import {
  JSX,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { Pressable, StyleSheet } from 'react-native'

import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import { Block } from '../block'
import { Image } from '../image'
import { createVariantStyles } from './styles'
import {
  AccordionContentProps,
  AccordionContextType,
  AccordionHeaderProps,
  AccordionRootProps,
  AccordionTriggerProps
} from './type'

const AccordionContext = createContext<AccordionContextType>(undefined)

const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within Accordion.Root')
  }
  return context
}

const Root = ({
  variant = 'default',
  children,
  onChange,
  style,
  id
}: AccordionRootProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const newValue = !prev
      onChange?.(newValue)
      return newValue
    })
  }, [onChange])
  const variantStyle = createVariantStyles(variant)

  const contextValue = useMemo(
    () => ({
      isOpen,
      toggle,
      variant,
      id
    }),
    [isOpen, toggle, variant, id]
  )

  return (
    <AccordionContext.Provider value={contextValue}>
      <Block style={[variantStyle, style]}>{children}</Block>
    </AccordionContext.Provider>
  )
}
const Trigger = ({ children, style }: AccordionTriggerProps): JSX.Element => {
  const { toggle } = useAccordion()

  return (
    <Pressable style={[styles.trigger, style]} onPress={toggle}>
      {children}
    </Pressable>
  )
}

const Header = ({ children, style }: AccordionHeaderProps): JSX.Element => {
  const { isOpen } = useAccordion()

  return (
    <Block style={[styles.header, style]}>
      {children}
      <Animated.View
        style={{
          transform: [
            {
              rotate: isOpen ? '180deg' : '0deg'
            }
          ]
        }}>
        <Image size={24} source={require('@assets/images/chevron.png')} />
      </Animated.View>
    </Block>
  )
}

const Content = ({ children, style }: AccordionContentProps): JSX.Element => {
  const { isOpen } = useAccordion()
  const contentRef = useAnimatedRef<Animated.View>()
  const height = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value
  }))

  useEffect(() => {
    if (isOpen) {
      runOnUI(() => {
        'worklet'
        const measured = measure(contentRef)
        if (measured) {
          height.value = withTiming(measured.height)
        }
      })()
    } else {
      height.value = withTiming(0)
    }
  }, [contentRef, height, isOpen])

  return (
    <Animated.View style={[styles.contentWrapper, animatedStyle]}>
      <Animated.View ref={contentRef} style={[styles.content, style]}>
        {children}
      </Animated.View>
    </Animated.View>
  )
}

const Accordion = {
  Root,
  Trigger,
  Header,
  Content
}

export default Accordion

const styles = StyleSheet.create({
  trigger: {
    padding: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contentWrapper: {
    overflow: 'hidden'
  },
  content: {
    padding: 20,
    width: '100%',
    position: 'absolute'
  }
})
