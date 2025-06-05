import { StyleSheet } from 'react-native'

import { localImage } from '@assets/images'
import { goBack } from '@navigation/config/navigation-services'

import { Block } from '../block'
import { Button } from '../button'
import Icon from '../icon'
import { Image } from '../image'
import Row from '../row'
import { Text } from '../text'
import { DEFAULT_ACTIONS, type HeaderProps } from './type'

export const Header = ({
  isBack = false,
  title = 'Header Label',
  subtitle,
  avatar = localImage().icAvatar,
  rightActions = DEFAULT_ACTIONS,
  style
}: HeaderProps): React.JSX.Element => {
  const renderLeft = (): React.JSX.Element => {
    if (isBack) {
      return (
        <Button isIconOnly variant='ghost' onPress={goBack}>
          <Icon name='left' size={22} type='antDesign' />
        </Button>
      )
    }
    return <Image size={40} source={avatar} />
  }

  const renderContent = (): React.JSX.Element => (
    <Block flex={1}>
      <Text center={isBack} numberOfLines={1} size={16}>
        {title}
      </Text>
      {!isBack && !!subtitle && (
        <Text numberOfLines={1} size={12}>
          {subtitle}
        </Text>
      )}
    </Block>
  )

  const renderRightActions = (): React.JSX.Element => (
    <>
      {rightActions?.map((action) => (
        <Button
          key={action.id}
          isIconOnly
          variant='ghost'
          onPress={action.onPress}>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent'
  }
})
