import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'

import { getIconComponent } from '@assets/icons'
import { useUnistyles } from 'react-native-unistyles'
import Block from '../block'
import type { IconComponentProps } from './type'

const BUTTON_COMPONENTS = {
  withoutPress: Block,
  withPress: Platform.select<
    typeof TouchableNativeFeedback | typeof TouchableOpacity
  >({
    android: TouchableNativeFeedback,
    default: TouchableOpacity
  })
} as const

export default function Icon(props: IconComponentProps): React.JSX.Element {
  const { theme } = useUnistyles()
  const {
    type,
    name,
    color = theme.colors.black,
    size,
    disabledStyle,
    style,
    activeOpacity = 0.6,
    ...rest
  } = props

  const ButtonComponent =
    BUTTON_COMPONENTS[props.onPress ? 'withPress' : 'withoutPress']

  const IconComponent = getIconComponent[type]

  const initContainerStyle = StyleSheet.flatten([
    disabledStyle ?? {},
    style
  ])

  return (
    <ButtonComponent
      {...rest}
      {...{ activeOpacity }}
      {...(props.disabled && { opacity: 0.5 })}
      overflow='hidden'
      style={Platform.OS === 'android' ? {} : initContainerStyle}
    >
      <Block
        collapsable={false}
        overflow='hidden'
        style={Platform.OS === 'android' ? initContainerStyle : {}}
      >
        <IconComponent
          color={theme.colors[color as keyof typeof theme.colors] ?? color}
          name={name}
          size={size ?? 0}
        />
      </Block>
    </ButtonComponent>
  )
}
