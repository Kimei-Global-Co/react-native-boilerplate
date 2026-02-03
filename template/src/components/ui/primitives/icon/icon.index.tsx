import {
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native'

import type { IconType } from '@assets/icons'
import { getIconComponent } from '@assets/icons'
import { Block } from '@components/ui/layouts/block/block.index'
import Colors from '@theme/colors'
import type { IconProps } from './icon.type'

const DEFAULT_RIPPLE = { borderless: true, color: 'rgba(0,0,0,0.12)' } as const
/**
 * Example:
 * ```
 * <Icon
 *   name='right'
 *   size={22}
 *   type='antDesign'
 * />
 * ```
 */
export function Icon<T extends IconType>(
  props: IconProps<T>
): React.JSX.Element {
  const {
    type,
    name,
    color = Colors.black,
    size,
    disabledStyle,
    style,
    activeOpacity = 0.6,
    android_ripple,
    onPress,
    disabled,
    ...rest
  } = props

  const IconComponent = getIconComponent<T>(type)

  const initContainerStyle = StyleSheet.flatten([disabledStyle ?? {}, style])

  const containerStyle =
    Platform.OS === 'android' ? {} : (initContainerStyle as object)

  const innerStyle = Platform.OS === 'android' ? initContainerStyle : {}

  if (!onPress) {
    return (
      <Block {...rest} overflow='hidden' style={containerStyle}>
        <Block collapsable={false} overflow='hidden' style={innerStyle}>
          <IconComponent
            color={Colors[color as keyof typeof Colors] ?? color}
            name={name}
            size={size ?? 0}
          />
        </Block>
      </Block>
    )
  }

  return (
    <Pressable
      {...rest}
      android_ripple={android_ripple ?? DEFAULT_RIPPLE}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        containerStyle,
        { overflow: 'hidden' },
        pressed && { opacity: activeOpacity },
        disabled && { opacity: 0.5 }
      ]}
    >
      <Block
        collapsable={false}
        overflow='hidden'
        style={innerStyle}
      >
        <IconComponent
          color={Colors[color as keyof typeof Colors] ?? color}
          name={name}
          size={size ?? 0}
        />
      </Block>
    </Pressable>
  )
}
