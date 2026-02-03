import { TouchableOpacity } from 'react-native'

import { Block } from '@components/ui/layouts/block/block.index'
import { Header } from '@components/ui/patterns/header/header.index'
import OptionsSheet from '@components/ui/patterns/options-sheet'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { TrueSheet } from '@lodev09/react-native-true-sheet'
import { createContainer } from '../create-container'

const SheetComponent = (): React.JSX.Element => {
  return (
    <Block flex>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Sheet Component</Header.Title>
        </Header.Section>
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
