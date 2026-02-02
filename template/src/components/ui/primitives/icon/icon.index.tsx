import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'

import { getIconComponent } from '@assets/icons'
import Block from '@components/ui/layouts/block/block.index'
import Colors from '@theme/colors'
import type { IconComponentProps } from './icon.type'

const BUTTON_COMPONENTS = {
  withoutPress: Block,
  withPress: Platform.select<
    typeof TouchableNativeFeedback | typeof TouchableOpacity
  >({
    android: TouchableNativeFeedback,
    default: TouchableOpacity
  })
} as const
/**
 * Example:
 * ```
 * <Icon
 *   name={'right'}
 *   size={22}
 *   type='antDesign'
 * />
 * ```
 */
export default function Icon(props: IconComponentProps): React.JSX.Element {
  const {
    type,
    name,
    color = Colors.black,
    size,
    disabledStyle,
    style,
    activeOpacity = 0.6,
    ...rest
  } = props

  const ButtonComponent =
    BUTTON_COMPONENTS[props.onPress ? 'withPress' : 'withoutPress']

  const IconComponent = getIconComponent[type]

  const initContainerStyle = StyleSheet.flatten([disabledStyle ?? {}, style])

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
          color={Colors[color as keyof typeof Colors] ?? color}
          name={name}
          size={size ?? 0}
        />
      </Block>
    </ButtonComponent>
  )
}
