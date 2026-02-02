import { StyleSheet } from 'react-native'

import { localImage } from '@assets/images'
import { goBack } from '@navigation/config/navigation-services'
import Block from '../block/block.index'
import Button from '../button/button.index'
import Icon from '../icon/icon.index'
import Image from '../image/image.index'
import Row from '../row/row.index'
import Typography from '../typography/typo.index'
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
