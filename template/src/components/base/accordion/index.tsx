import {
  JSX,
  createContext,
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
import Icon from '../icon'
import { createVariantStyles } from './styles'
import {
  AccordionContentProps,
  AccordionContextType,
  AccordionHeaderProps,
  AccordionRootProps
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
  style
}: AccordionRootProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggle = (): void => {
    setIsOpen((prev) => {
      const newValue = !prev
      onChange?.(newValue)
      return newValue
    })
  }
  const variantStyle = createVariantStyles(variant)

  const contextValue = useMemo(() => ({ isOpen, toggle }), [isOpen, toggle])

  return (
    <AccordionContext.Provider value={contextValue}>
      <Block style={[variantStyle, style]}>{children}</Block>
    </AccordionContext.Provider>
  )
}

const Header = ({ children, style }: AccordionHeaderProps): JSX.Element => {
  const { isOpen, toggle } = useAccordion()

  return (
    <Pressable onPress={toggle}>
      <Block style={[styles.header, style]}>
        {children}
        <Animated.View
          style={{
            transform: [{ rotate: isOpen ? '180deg' : '0deg' }]
          }}>
          <Icon
            color='blue_600'
            name='chevron-circle-down'
            size={24}
            type='fontAwesome5'
          />
        </Animated.View>
      </Block>
    </Pressable>
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
    justifyContent: 'space-between',
    padding: 20
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
