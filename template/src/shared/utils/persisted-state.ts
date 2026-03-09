import { useEffect, useState } from 'react'

import { Image } from 'expo-image'
import { MMKV } from 'react-native-mmkv'
import { queryClient } from './query-client'

//#region APP LANGUAGE

export const appLanguageStorage = new MMKV({ id: 'mmkv.language' })
export const APP_LANGUAGE_KEY = 'app-language'

export function setAppLanguage(language: string) {
  appLanguageStorage.set(APP_LANGUAGE_KEY, language)
}

export function getAppLanguage() {
  return appLanguageStorage.getString(APP_LANGUAGE_KEY)
}

export function deleteAppLanguage() {
  appLanguageStorage.delete(APP_LANGUAGE_KEY)
}

export function useAppLanguage() {
  const [appLanguageInternal, setAppLanguageInternal] = useState(() =>
    getAppLanguage()
  )

  useEffect(() => {
    const listener = appLanguageStorage.addOnValueChangedListener(
      (changedKey) => {
        if (changedKey === APP_LANGUAGE_KEY) {
          const newValue = getAppLanguage()
          setAppLanguageInternal(newValue)
        }
      }
    )
    return () => {
      listener.remove()
    }
  }, [])

  return appLanguageInternal
}

//#endregion APP LANGUAGE

//#region GLOBAL
export async function clearAllPersistedState() {
  deleteAppLanguage()
  queryClient.removeQueries()
  await Image.clearDiskCache()
  await Image.clearMemoryCache()
}
//#endregion GLOBAL
