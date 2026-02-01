import { useEffect, useRef } from 'react'
import { Platform } from 'react-native'

import * as Updates from 'expo-updates'
import dayjs from 'dayjs/esm/index'
import { useCallbackRef } from './use-callback-ref'
import { useIsForeground } from './use-is-foreground'

export function useExpoUpdate(): void {
  const isForeground = useIsForeground()
  const appBackgrounded = useRef<Date | null>(null)
  const lastUpdateCheck = useRef<Date | null>(null)

  const checkUpdate = useCallbackRef(async () => {
    try {
      const update = await Updates.checkForUpdateAsync()
      if (!update.isAvailable) {
        return
      }

      const result = await Updates.fetchUpdateAsync()

      if (!result.isNew) {
        return
      }

      await Updates.reloadAsync()
    } catch (error) {
      console.error('error update', error)
    }
  })

  useEffect(() => {
    // dont run on web or dev mode
    if (__DEV__ || Platform.OS === 'web') {
      return
    }

    // this fires when the app is backgrounded or in inactive state (app switcher)
    // will be skipped on first run
    if (!isForeground) {
      appBackgrounded.current = new Date()
      return
    }

    // check if its the first time running, so its cold start
    // or if its been 30 minutes since the last check and the app was backgrounded
    if (
      !lastUpdateCheck.current ||
      (appBackgrounded.current &&
        dayjs(new Date()).diff(appBackgrounded.current, 'minute') > 15)
    ) {
      checkUpdate()
    }

    lastUpdateCheck.current = new Date()
  }, [checkUpdate, isForeground])
}
