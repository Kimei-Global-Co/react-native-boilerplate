import { StyleSheet } from 'react-native'

import { localImage } from '@assets/images'
import { goBack } from '@navigation/config/navigation-services'
import Block from '../block'
import Button from '../button'
import Icon from '../icon'
import Image from '../image'
import Row from '../row'
import Typography from '../typography'
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
        <Button onPress={goBack} style={{ width: 30 }}>
          <Icon name='left' size={22} type='antDesign' />
        </Button>
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
        <Button key={action.id} onPress={action.onPress} style={{ width: 30 }}>
          <Icon name={action.name} size={22} type={action.type} />
        </Button>
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
