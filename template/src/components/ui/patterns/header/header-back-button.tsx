import { Button } from '@components/ui/primitives/button/button.index'
import { goBack } from '@navigation/config/navigation-services'
import type { HeaderBackButtonProps } from './header.type'

export function HeaderBackButton({
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
