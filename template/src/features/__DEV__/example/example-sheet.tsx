import { TouchableOpacity } from 'react-native'

import Block from '@components/ui/layouts/block/block.index'
import Header from '@components/ui/patterns/header/header.index'
import OptionsSheet from '@components/ui/patterns/options-sheet'
import Typography from '@components/ui/primitives/typography/typo.index'
import { TrueSheet } from '@lodev09/react-native-true-sheet'
import { createContainer } from '../create-container'

const SheetComponent = (): React.JSX.Element => {
  return (
    <Block flex>
      <Header>
        <Header.Left>
          <Header.BackButton />
        </Header.Left>
        <Header.Content>
          <Header.Title>Sheet Component</Header.Title>
        </Header.Content>
      </Header>
      <TouchableOpacity
        onPress={() => TrueSheet.present('options')}
        style={{ margin: 10 }}
      >
        <Typography>Example Sheet</Typography>
      </TouchableOpacity>
      <OptionsSheet />
    </Block>
  )
}

const Root = createContainer(SheetComponent, 'Sheet')

export default function ExampleSheet(): React.JSX.Element {
  return <Root />
}
