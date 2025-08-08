import { TouchableOpacity } from 'react-native'

import { Block, Header, Typography } from '@components'
import { useSheetStore } from 'store/sheet'
import { createContainer } from '../create-container'

const SheetComponent = (): React.JSX.Element => {
  const { openSheet } = useSheetStore()
  return (
    <Block flex>
      <Header isBack title='Sheet Component' />
      <TouchableOpacity
        onPress={() => openSheet({ name: 'options' })}
        style={{ margin: 10 }}
      >
        <Typography>Example Sheet</Typography>
      </TouchableOpacity>
    </Block>
  )
}

const Root = createContainer(SheetComponent, 'Sheet')

export default function ExampleSheet(): React.JSX.Element {
  return <Root />
}
