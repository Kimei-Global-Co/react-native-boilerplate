import { JSX } from 'react'
import { StyleSheet } from 'react-native'

import { ImageSource } from 'expo-image'

import { Image } from '../image'
import { Text } from '../text'

export interface IEmptyViewProps {
  title?: string
  description?: string
  imageSource?: ImageSource
}

const EmptyView = (props: IEmptyViewProps): JSX.Element => {
  const { title, imageSource, description } = props
  return (
    <>
      <Image
        resizeMode='contain'
        source={imageSource}
        style={styles.imageStyle}
      />
      <Text fontType='extraBold' size={24}>
        {title}
      </Text>
      <Text center margin={{ horizontal: 40 }}>
        {description}
      </Text>
    </>
  )
}

export default EmptyView

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 250
  }
})
