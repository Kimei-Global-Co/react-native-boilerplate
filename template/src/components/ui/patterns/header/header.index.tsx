import type { IconType } from '@assets/icons'
import { Block } from '@components/ui/layouts/block/block.index'
import { Row } from '@components/ui/layouts/row/row.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Image } from '@components/ui/primitives/image/image.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { goBack } from '@navigation/config/navigation-services'
import type {
  HeaderActionProps,
  HeaderAvatarProps,
  HeaderBackButtonProps,
  HeaderRootProps,
  HeaderSectionProps,
  HeaderTextProps
} from './header.type'

function HeaderRoot({
  children,
  style
}: Readonly<HeaderRootProps>): React.JSX.Element {
  return (
    <Block
      backgroundColor='transparent'
      padding={{ horizontal: 16, vertical: 12 }}
      style={style}
    >
      <Row between center gap={8}>
        {children}
      </Row>
    </Block>
  )
}

function HeaderSection({
  children,
  position,
  style
}: Readonly<HeaderSectionProps>) {
  if (position === 'content') {
    return (
      <Block flex={1} justify='center' style={style}>
        {children}
      </Block>
    )
  }

  return (
    <Row
      center={position !== 'right'}
      end={position === 'right'}
      gap={8}
      style={style}
    >
      {children}
    </Row>
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

function HeaderAction<T extends IconType>(
  props: Readonly<HeaderActionProps<T>>
) {
  const { onPress, style, size = 22, ...iconProps } = props
  return (
    <Button.Ghost onPress={onPress} style={[{ width: 30 }, style]}>
      <Button.Content>
        <Button.Icon {...iconProps} size={size} />
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
        <Button.Icon name='left' size={22} type='antDesign' />
      </Button.Content>
    </Button.Ghost>
  )
}

function HeaderAvatar({
  source = 'ic-avatar',
  size = 40,
  style
}: Readonly<HeaderAvatarProps>) {
  return <Image size={size} source={source} style={style} />
}

export const Header = Object.assign(HeaderRoot, {
  Action: HeaderAction,
  Avatar: HeaderAvatar,
  BackButton: HeaderBackButton,
  Section: HeaderSection,
  Subtitle: HeaderSubtitle,
  Title: HeaderTitle
})
