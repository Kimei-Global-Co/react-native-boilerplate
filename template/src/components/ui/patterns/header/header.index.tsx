import { StyleSheet } from 'react-native'

import { localImage } from '@assets/images'
import Block from '@components/ui/layouts/block/block.index'
import Row from '@components/ui/layouts/row/row.index'
import Button from '@components/ui/primitives/button/button.index'
import Icon from '@components/ui/primitives/icon/icon.index'
import Image from '@components/ui/primitives/image/image.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { goBack } from '@navigation/config/navigation-services'
import type {
  BaseHeaderProps,
  HeaderActionProps,
  HeaderAvatarProps,
  HeaderBackButtonProps,
  HeaderRootProps,
  HeaderTextProps
} from './header.type'

const DEFAULT_AVATAR = localImage().icAvatar

function HeaderRoot({
  children,
  style
}: Readonly<HeaderRootProps>): React.JSX.Element {
  return (
    <Block style={[styles.container, style]}>
      <Row between center gap={8}>
        {children}
      </Row>
    </Block>
  )
}

function HeaderLeft({ children, style }: Readonly<BaseHeaderProps>) {
  return (
    <Row center gap={8} style={style}>
      {children}
    </Row>
  )
}

function HeaderRight({ children, style }: Readonly<BaseHeaderProps>) {
  return (
    <Row center gap={8} style={style}>
      {children}
    </Row>
  )
}

function HeaderContent({ children, style }: Readonly<BaseHeaderProps>) {
  return (
    <Block flex={1} style={[{ justifyContent: 'center' }, style]}>
      {children}
    </Block>
  )
}

function HeaderTitle({
  children,
  center,
  style,
  numberOfLines = 1
}: Readonly<HeaderTextProps>) {
  if (!children) {
    return null
  }
  return (
    <Typography
      center={center}
      numberOfLines={numberOfLines}
      size={16}
      style={style}
    >
      {children}
    </Typography>
  )
}

function HeaderSubtitle({
  children,
  center,
  style,
  numberOfLines = 1
}: Readonly<HeaderTextProps>) {
  if (!children) {
    return null
  }
  return (
    <Typography
      center={center}
      color='gray_500'
      numberOfLines={numberOfLines}
      size={12}
      style={style}
    >
      {children}
    </Typography>
  )
}

function HeaderAction({
  icon,
  type = 'materialCommunityIcons',
  onPress,
  style,
  size = 22
}: Readonly<HeaderActionProps>) {
  return (
    <Button.Ghost onPress={onPress} style={[{ width: 30 }, style]}>
      <Button.Content>
        <Button.Icon>
          <Icon name={icon} size={size} type={type} />
        </Button.Icon>
      </Button.Content>
    </Button.Ghost>
  )
}

function HeaderBackButton({
  onPress = goBack,
  style
}: Readonly<HeaderBackButtonProps>) {
  return (
    <Button.Ghost onPress={onPress} style={[{ width: 30 }, style]}>
      <Button.Content>
        <Button.Icon>
          <Icon name='left' size={22} type='antDesign' />
        </Button.Icon>
      </Button.Content>
    </Button.Ghost>
  )
}

function HeaderAvatar({
  source = DEFAULT_AVATAR,
  size = 40,
  style
}: Readonly<HeaderAvatarProps>) {
  return <Image size={size} source={source} style={style} />
}

const Header = Object.assign(HeaderRoot, {
  Action: HeaderAction,
  Avatar: HeaderAvatar,
  BackButton: HeaderBackButton,
  Content: HeaderContent,
  Left: HeaderLeft,
  Right: HeaderRight,
  Subtitle: HeaderSubtitle,
  Title: HeaderTitle
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 12
  }
})

export default Header
