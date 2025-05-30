import { JSX, memo } from 'react'
import { StyleSheet } from 'react-native'

import { localImage } from '@assets/images'

import { Block } from '../block'
import Button from '../button'
import { Image } from '../image'
import Row from '../row'
import { Text } from '../text'
import { DEFAULT_ACTIONS, HeaderProps } from './type'

const Header = ({
  showBack = true,
  onBack,
  title = 'Header Label',
  subtitle,
  avatar = localImage().icAvatar,
  rightActions = DEFAULT_ACTIONS,
  style
}: HeaderProps): JSX.Element => {
  const renderLeft = (): JSX.Element => {
    if (showBack) {
      return (
        <Button isIconOnly variant='ghost' onPress={onBack}>
          <Image size={24} source={localImage().icBack} />
        </Button>
      )
    }
    return <Image size={40} source={avatar} />
  }

  const renderContent = (): JSX.Element => (
    <Block flex={1}>
      <Text center={showBack} numberOfLines={1} size={16}>
        {title}
      </Text>
      {!showBack && !!subtitle && (
        <Text numberOfLines={1} size={12}>
          {subtitle}
        </Text>
      )}
    </Block>
  )

  const renderRightActions = (): JSX.Element => (
    <>
      {rightActions?.map((action) => (
        <Button key={action.id} isIconOnly variant='ghost' onPress={action.onPress}>
          <Image size={24} source={action.icon} />
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent'
  }
})

export default memo(Header)
