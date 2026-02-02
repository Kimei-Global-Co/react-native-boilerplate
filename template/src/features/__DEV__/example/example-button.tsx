import { ScrollView, View } from 'react-native'

import Block from '@components/ui/primitives/block/block.index'
import Button from '@components/ui/primitives/button/button.index'
import Header from '@components/ui/primitives/header/header.index'
import Typography from '@components/ui/primitives/typography/typo.index'

/**
 * Usage notes:
 * - Prefer the explicit variant helpers: Button.Primary / Secondary / Shadow / Bordered
 * - Compose subparts when you need custom layouts: Button.Content, Pending, Success, Error, Label, Icon
 * - State drives visuals: `state="pending" | "success" | "error" | "idle"`; pending also disables taps
 */
export default function ExampleButton(): React.JSX.Element {
  return (
    <Block collapsable={false} flex inset='top'>
      <Header isBack title='Button component' />
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
