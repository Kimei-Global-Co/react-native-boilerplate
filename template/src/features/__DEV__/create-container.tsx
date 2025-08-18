import Block from '@components/base/block'

export const MENU_ITEMS = {
  Accordion: 'Accordion',
  Avatar: 'Avatar',
  Button: 'Button',
  Camera: 'Camera',
  Card: 'Card',
  EmptyView: 'EmptyView',
  Header: 'Header',
  Icon: 'Icon',
  Image: 'Image',
  Lingui: 'Lingui',
  List: 'List',
  Row: 'Row',
  Sheet: 'Sheet',
  Spacer: 'Spacer',
  Spinner: 'Spinner',
  Switch: 'Switch',
  Tag: 'Tag',
  TextInput: 'TextInput',
  Typography: 'Typography'
} as const

type DisplayNames = typeof MENU_ITEMS

export const createContainer = <Props extends object>(
  Component: React.ComponentType<Props>,
  displayName: DisplayNames[keyof DisplayNames]
): React.FC<Props> => {
  const MenuComponent: React.FC<Props> = (props: Props) => {
    return (
      <Block backgroundColor='primary' flex inset='top'>
        <Component {...props} />
      </Block>
    )
  }
  MenuComponent.displayName = displayName

  return MenuComponent
}
