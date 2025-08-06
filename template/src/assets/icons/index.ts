import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Fontisto from '@expo/vector-icons/Fontisto'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'

export const Icons = {
  antDesign: AntDesign,
  entypo: Entypo,
  evilIcons: EvilIcons,
  feather: Feather,
  fontAwesome: FontAwesome,
  fontAwesome5: FontAwesome5,
  fontisto: Fontisto,
  ionicons: Ionicons,
  materialCommunityIcons: MaterialCommunityIcons,
  materialIcons: MaterialIcons,
  octicons: Octicons,
  simpleLineIcons: SimpleLineIcons
}
export type IconType = keyof typeof Icons

export const getIconComponent = (
  componentName: IconType
): (typeof Icons)[IconType] => Icons[componentName]
