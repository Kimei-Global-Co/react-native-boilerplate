import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'

import { getIconComponent } from '@assets/icons'
import theme from '@theme'

import { Block } from '../block'
import { type IconComponentProps } from './type'

const Icon: React.FC<IconComponentProps> = (props) => {
  const {
    type,
    name,
    color = theme.colors.black,
    size,
    disabledStyle,
    style,
    activeOpacity = 0.6,
    ButtonComponent = props.onPress
      ? Platform.select<
          typeof TouchableNativeFeedback | typeof TouchableOpacity
        >({
          android: TouchableNativeFeedback,
          default: TouchableOpacity
        })
      : Block,
    ...rest
  } = props
  const IconComponent = getIconComponent(type)

  const initContainerStyle = StyleSheet.flatten([disabledStyle, style])

  return (
    <ButtonComponent
      {...rest}
      {...(ButtonComponent === TouchableOpacity && { activeOpacity })}
      {...(props.disabled && { opacity: 0.5 })}
      overflow='hidden'
      style={Platform.OS === 'android' ? {} : initContainerStyle}>
      <Block
        overflow='hidden'
        style={Platform.OS === 'android' ? initContainerStyle : {}}>
        <IconComponent
          name={name}
          size={size ?? 0}
          color={
            color && color in theme.colors
              ? theme.colors[color as keyof typeof theme.colors]
              : color
          }
        />
      </Block>
    </ButtonComponent>
  )
}

export default Icon
