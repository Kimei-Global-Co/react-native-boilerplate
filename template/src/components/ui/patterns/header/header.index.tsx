import type { TIcon } from '@assets/icons'
import { Block } from '@components/ui/primitives/block/block.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Image } from '@components/ui/primitives/image/image.index'
import { Row } from '@components/ui/primitives/row/row.index'
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
      <Row between={true} center={true} gap={8}>
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
      <Block flex={true} justify='center' style={style}>
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
    <Typography center={center} numberOfLines={numberOfLines} style={style}>
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
      style={style}
    >
      {children}
    </Typography>
  )
}

function HeaderAction<T extends TIcon>(props: Readonly<HeaderActionProps<T>>) {
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
  source = 'ic_avatar',
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
