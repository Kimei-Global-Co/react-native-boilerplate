import { Block } from '@components/ui/primitives/block/block.index'
import { Row } from '@components/ui/primitives/row/row.index'
import type { HeaderRootProps } from './header.type'
import { HeaderAction } from './header-action'
import { HeaderAvatar } from './header-avatar'
import { HeaderBackButton } from './header-back-button'
import { HeaderSection } from './header-section'
import { HeaderSubtitle } from './header-subtitle'
import { HeaderTitle } from './header-title'

export function Header({
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

Header.Action = HeaderAction
Header.Avatar = HeaderAvatar
Header.BackButton = HeaderBackButton
Header.Section = HeaderSection
Header.Subtitle = HeaderSubtitle
Header.Title = HeaderTitle
