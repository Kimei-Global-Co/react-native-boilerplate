import { useEffect } from 'react'

import type { LinkingOptions } from '@react-navigation/native'
import { cacheFonts, Icons } from 'assets/icons'
import { useCallbackRef } from './use-callback-ref'

export function useInitial(
  trackedLinking: React.RefObject<LinkingOptions<ReactNavigation.RootParamList>>
) {
  const prepare = useCallbackRef(() => {
    try {
      cacheFonts([
        Icons.fontAwesome6.font,
        Icons.fontAwesome5.font,
        Icons.antDesign.font,
        Icons.feather.font,
        Icons.fontAwesome.font,
        Icons.materialCommunityIcons.font,
        Icons.materialIcons.font,
        Icons.evilIcons.font,
        Icons.fontisto.font,
        Icons.octicons.font,
        Icons.ionicons.font,
        Icons.simpleLineIcons.font,
        Icons.entypo.font
      ])
    } catch (e) {
      console.warn('Lỗi tải font assets:', e)
    }
  })

  useEffect(() => {
    prepare()
  }, [prepare])

  return {
    // isReady: fontsLoaded,
    linking: trackedLinking.current,
    onReady: async () => {
      await Promise.resolve()
    }
  }
}
