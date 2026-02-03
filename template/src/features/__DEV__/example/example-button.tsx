import { ScrollView, View } from 'react-native'

import { Block } from '@components/ui/layouts/block/block.index'
import { Header } from '@components/ui/patterns/header/header.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'

/**
 * Usage notes:
 * - Prefer the explicit variant helpers: Button.Primary / Secondary / Shadow / Bordered
 * - Compose subparts when you need custom layouts: Button.Content, Pending, Success, Error, Label, Icon
 * - State drives visuals: `state="pending" | "success" | "error" | "idle"`; pending also disables taps
 */
export default function ExampleButton(): React.JSX.Element {
  return (
    <Block collapsable={false} flex inset='top'>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Button component</Header.Title>
        </Header.Section>
      </Header>
      <ScrollView
        contentContainerStyle={{ gap: 12, padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <Typography center>Base Button</Typography>
        <Button title='Default' />

        <Typography center>Preset Variants</Typography>
        <Button.Primary title='Primary' />
        <Button.Secondary title='Secondary' />
        <Button.Shadow title='Shadow' />
        <Button.Bordered title='Bordered' />
        <Button.Ghost title='Ghost' />

        <Typography center>States</Typography>
        <Button.Primary state='pending' title='Pending' />
        <Button.Primary state='success' title='Success' />
        <Button.Primary state='error' title='Error' />

        <Typography center>Composed Content</Typography>
        <Button.Primary>
          <Button.Content>
            <Button.Icon
              color='amber_400'
              name='close'
              size={20}
              type='antDesign'
            />
            <Button.Label>With Button Icon</Button.Label>
            <Button.Pending />
          </Button.Content>
        </Button.Primary>

        <Button.Primary>
          <Button.Content>
            <Button.Icon>
              <View
                style={{
                  backgroundColor: 'black',
                  borderRadius: 9,
                  height: 18,
                  width: 18
                }}
              />
            </Button.Icon>
            <Button.Label>Custom Layout</Button.Label>
            <Button.Pending />
          </Button.Content>
        </Button.Primary>

        <Typography center>Disabled</Typography>
        <Button.Secondary disabled title='Disabled' />
      </ScrollView>
    </Block>
  )
}
