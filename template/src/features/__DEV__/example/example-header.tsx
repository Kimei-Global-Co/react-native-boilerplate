import { Block } from '@components/ui/layouts/block/block.index'
import { Header } from '@components/ui/patterns/header/header.index'
import { createContainer } from '../create-container'

const HeaderComponent = (): React.JSX.Element => {
  return (
    <Block style={{ gap: 20 }}>
      {/* Example 1: Standard Back with Title */}
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title center>Header Component</Header.Title>
        </Header.Section>
        <Header.Section position='right'>
          {/* Empty right to balance layout if needed, or explicit action */}
          <Header.Action
            name='dots-vertical'
            onPress={() => {
              //
            }}
            type='materialCommunityIcons'
          />
        </Header.Section>
      </Header>

      {/* Example 2: Avatar with Title/Subtitle and Actions */}
      <Header>
        <Header.Section position='left'>
          <Header.Avatar source={{ uri: 'https://i.pravatar.cc/300' }} />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>John Doe</Header.Title>
          <Header.Subtitle>Online</Header.Subtitle>
        </Header.Section>
        <Header.Section position='right'>
          <Header.Action
            name='bell-outline'
            onPress={() => {
              //
            }}
            type='materialCommunityIcons'
          />
          <Header.Action
            name='dots-vertical'
            onPress={() => {
              //
            }}
            type='materialCommunityIcons'
          />
        </Header.Section>
      </Header>

      {/* Example 3: Minimal Title Only */}
      <Header>
        <Header.Section position='content'>
          <Header.Title>Minimal Header</Header.Title>
        </Header.Section>
      </Header>

      {/* Example 4: Custom Left Action */}
      <Header>
        <Header.Section position='left'>
          <Header.Action
            name='close'
            onPress={() => {
              //
            }}
            type='antDesign'
          />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title center>Modal Header</Header.Title>
        </Header.Section>
        <Header.Section position='right'>
          <Header.Action
            name='check'
            onPress={() => {
              //
            }}
            type='antDesign'
          />
        </Header.Section>
      </Header>
    </Block>
  )
}

const Root = createContainer(HeaderComponent, 'Header')

export default function ExampleHeader(): React.JSX.Element {
  return <Root />
}
