import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'

import { Image } from 'expo-image'
import SheetsContainer from '@components/common/sheets-container'
import { useInitial } from '@hooks/use-initial'
import { linking } from '@navigation/config/linking'
import { navigationRef } from '@navigation/config/navigation-services'
import { NavigationContainer } from '@react-navigation/native'
import RootScenes from './root-scenes'

export default function MainNavigation(): React.JSX.Element {
  const trackedLinking = useRef(linking)

  const linkingConfig = useInitial(trackedLinking)

  useEffect(() => {
    // a memory warning listener for free up FastImage Cache
    async function clearFastImageMemory(): Promise<void> {
      try {
        await Image.clearMemoryCache()
        console.warn('did receive memory warning and cleared')
      } catch {
        // ignore
      }
    }

    const memoryWarningSubscription = AppState.addEventListener(
      'memoryWarning',
      () => {
        clearFastImageMemory()
      }
    )
    return (): void => {
      memoryWarningSubscription.remove()
    }
  }, [])

  return (
    <NavigationContainer
      linking={
        process.env.EXPO_PUBLIC_STAGE === 'development' ? undefined : linking
      }
      onReady={linkingConfig.onReady}
      ref={navigationRef}
    >
      <RootScenes />
      <SheetsContainer />
    </NavigationContainer>
  )
}
