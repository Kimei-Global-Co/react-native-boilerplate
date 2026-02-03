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

type IconNameMap = {
  antDesign: React.ComponentProps<typeof AntDesign>['name']
  entypo: React.ComponentProps<typeof Entypo>['name']
  evilIcons: React.ComponentProps<typeof EvilIcons>['name']
  feather: React.ComponentProps<typeof Feather>['name']
  fontAwesome: React.ComponentProps<typeof FontAwesome>['name']
  fontAwesome5: string
  fontAwesome6: string
  fontisto: React.ComponentProps<typeof Fontisto>['name']
  ionicons: React.ComponentProps<typeof Ionicons>['name']
  materialCommunityIcons: React.ComponentProps<typeof MaterialCommunityIcons>['name']
  materialIcons: React.ComponentProps<typeof MaterialIcons>['name']
  octicons: React.ComponentProps<typeof Octicons>['name']
  simpleLineIcons: React.ComponentProps<typeof SimpleLineIcons>['name']
}

export type IconName<T extends IconType> = IconNameMap[T]

export function getIconComponent<K extends IconType>(type: K) {
  return Icons[type] as React.ComponentType<{
    name: IconName<K>
    size?: number
    color?: string
  }>
}
