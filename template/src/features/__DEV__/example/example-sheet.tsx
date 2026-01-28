import { TouchableOpacity } from 'react-native'

import Block from '@components/base/block'
import Header from '@components/base/header'
import Typography from '@components/base/typography'
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
