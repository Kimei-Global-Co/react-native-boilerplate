import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Fontisto from '@expo/vector-icons/Fontisto'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import * as Font from 'expo-font'

export const Icons = {
  antDesign: AntDesign,
  entypo: Entypo,
  evilIcons: EvilIcons,
  feather: Feather,
  fontAwesome: FontAwesome,
  fontAwesome5: FontAwesome5,
  fontAwesome6: FontAwesome6,
  fontisto: Fontisto,
  ionicons: Ionicons,
  materialCommunityIcons: MaterialCommunityIcons,
  materialIcons: MaterialIcons,
  octicons: Octicons,
  simpleLineIcons: SimpleLineIcons
} as const

export type IconType = keyof typeof Icons

export function cacheFonts(fonts: string[]) {
  return fonts.map((font) => Font.loadAsync(font))
}

export type IconName<T extends IconType> = React.ComponentProps<
  (typeof Icons)[T]
>['name']

export const getIconComponent = Icons as {
  [K in IconType]: React.ComponentType<{
    name: IconName<K>
    size?: number
    color?: string
  }>
}
