import Block from '@components/ui/layouts/block/block.index'
import Header from '@components/ui/patterns/header/header.index'
import { createContainer } from '../create-container'

const HeaderComponent = (): React.JSX.Element => {
  return (
    <Block style={{ gap: 20 }}>
      {/* Example 1: Standard Back with Title */}
      <Header>
        <Header.Left>
          <Header.BackButton />
        </Header.Left>
        <Header.Content>
          <Header.Title center>Header Component</Header.Title>
        </Header.Content>
        <Header.Right>
          {/* Empty right to balance layout if needed, or explicit action */}
          <Header.Action
            icon='dots-vertical'
            onPress={() => {
              //
            }}
          />
        </Header.Right>
      </Header>

      {/* Example 2: Avatar with Title/Subtitle and Actions */}
      <Header>
        <Header.Left>
          <Header.Avatar source={{ uri: 'https://i.pravatar.cc/300' }} />
        </Header.Left>
        <Header.Content>
          <Header.Title>John Doe</Header.Title>
          <Header.Subtitle>Online</Header.Subtitle>
        </Header.Content>
        <Header.Right>
          <Header.Action
            icon='bell-outline'
            onPress={() => {
              //
            }}
          />
          <Header.Action
            icon='dots-vertical'
            onPress={() => {
              //
            }}
          />
        </Header.Right>
      </Header>

      {/* Example 3: Minimal Title Only */}
      <Header>
        <Header.Content>
          <Header.Title>Minimal Header</Header.Title>
        </Header.Content>
      </Header>

      {/* Example 4: Custom Left Action */}
      <Header>
        <Header.Left>
          <Header.Action
            icon='close'
            onPress={() => {
              //
            }}
            type='antDesign'
          />
        </Header.Left>
        <Header.Content>
          <Header.Title center>Modal Header</Header.Title>
        </Header.Content>
        <Header.Right>
          <Header.Action
            icon='check'
            onPress={() => {
              //
            }}
            type='antDesign'
          />
        </Header.Right>
      </Header>
    </Block>
  )
}

const Root = createContainer(HeaderComponent, 'Header')

export default function ExampleHeader(): React.JSX.Element {
  return <Root />
}
