import { StyleSheet } from 'react-native'

import { localImage } from '@assets/images'
import Block from '@components/ui/layouts/block/block.index'
import Row from '@components/ui/layouts/row/row.index'
import Button from '@components/ui/primitives/button/button.index'
import Icon from '@components/ui/primitives/icon/icon.index'
import Image from '@components/ui/primitives/image/image.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { goBack } from '@navigation/config/navigation-services'
import { DEFAULT_ACTIONS, type HeaderProps } from './header.type'

const DEFAULT_AVATAR = localImage().icAvatar

export default function Header({
  isBack = false,
  title = 'Header Label',
  subtitle,
  avatar = DEFAULT_AVATAR,
  rightActions = DEFAULT_ACTIONS,
  style
}: Readonly<HeaderProps>): React.JSX.Element {
  const renderLeft = (): React.JSX.Element => {
    if (isBack) {
      return (
        <Button.Ghost onPress={goBack} style={{ width: 30 }}>
          <Button.Content>
            <Button.Icon>
              <Icon name='left' size={22} type='antDesign' />
            </Button.Icon>
          </Button.Content>
        </Button.Ghost>
      )
    }
    return <Image size={40} source={avatar} />
  }

  const renderContent = (): React.JSX.Element => (
    <Block flex={1}>
      <Typography center={isBack} numberOfLines={1} size={16}>
        {title}
      </Typography>
      {!isBack && !!subtitle && (
        <Typography numberOfLines={1} size={12}>
          {subtitle}
        </Typography>
      )}
    </Block>
  )

  const renderRightActions = (): React.JSX.Element => (
    <>
      {rightActions?.map((action) => (
        <Button.Ghost
          key={action.id}
          onPress={action.onPress}
          style={{ width: 30 }}
        >
          <Button.Content>
            <Button.Icon>
              <Icon name={action.name} size={22} type={action.type} />
            </Button.Icon>
          </Button.Content>
        </Button.Ghost>
      ))}
    </>
  )

  return (
    <Block style={[styles.container, style]}>
      <Row between center gap={8}>
        {renderLeft()}
        {renderContent()}
        {renderRightActions()}
      </Row>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 12
  }
})
