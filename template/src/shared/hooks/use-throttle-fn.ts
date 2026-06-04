import throttle from 'lodash/throttle'
import { isFunction, ONE_SECOND_MS } from 'shared/utils/helper'
import { useCallbackRef } from './use-callback-ref'
import { useLatest } from './use-latest'
import { useUnmount } from './use-unmount'

export interface ThrottleOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
}

export function useThrottleFn<P extends unknown[], R>(
  fn: (...args: P) => R,
  options?: ThrottleOptions
) {
  if (__DEV__) {
    if (!isFunction(fn)) {
      console.error(
        `useThrottleFn expected parameter is a function, got ${typeof fn}`
      )
    }
  }

  const fnRef = useLatest(fn)

  const wait = options?.wait ?? ONE_SECOND_MS

  const stableCallback = useCallbackRef(
    (...args: unknown[]): R => fnRef.current(...(args as P))
  )

  const throttled = throttle(stableCallback, wait, options)

  useUnmount(() => throttled.cancel())

  return {
    cancel: throttled.cancel,
    flush: throttled.flush,
    run: throttled
  }
}
