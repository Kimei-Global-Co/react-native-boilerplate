import { useEffect } from 'react'
import { AppState } from 'react-native'

import { navigationRef } from '@navigation/config/navigation-services'
import { NavigationContainer } from '@react-navigation/native'
import { Image } from 'expo-image'
import RootScenes from './root-scenes'

export default function MainNavigation(): React.JSX.Element {
  useEffect(() => {
    // a memory warning listener for free up FastImage Cache
    const memoryWarningSubscription = AppState.addEventListener(
      'memoryWarning',
      () => {
        async function clearFastImageMemory(): Promise<void> {
          try {
            await Image.clearMemoryCache()
            console.warn('did receive memory warning and cleared')
          } catch {
            // ignore
          }
        }
        clearFastImageMemory()
      }
    )
    return (): void => {
      memoryWarningSubscription.remove()
    }
  }, [])

  return (
    <NavigationContainer ref={navigationRef}>
      <RootScenes />
    </NavigationContainer>
  )
}
