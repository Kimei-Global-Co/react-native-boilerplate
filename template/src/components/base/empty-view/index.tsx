import { StyleSheet } from 'react-native'

import { localImage } from '@assets/images'

import { Block } from '../block'
import { Image } from '../image'
import { Text } from '../text'

export interface IEmptyViewProps {
  title?: string
  description?: string
}

const EmptyView = (props: IEmptyViewProps): React.JSX.Element => {
  const { title, description } = props
  return (
    <Block align='center' justify='center'>
      <Image
        resizeMode='contain'
        source={localImage().icEmpty}
        style={styles.imageStyle}
      />
      <Text fontType='extraBold' size={24}>
        {title}
      </Text>
      <Text center margin={{ horizontal: 40 }}>
        {description}
      </Text>
    </Block>
  )
}

export default EmptyView

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 250
  }
})
