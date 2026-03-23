import { useEffectEvent } from 'react'

import debounce from 'lodash.debounce'
import { isFunction, ONE_SECOND_MS } from 'shared/utils/helper'
import { useLatest } from './use-latest'
import { useUnmount } from './use-unmount'

export type DebounceOptions = {
  wait?: number
  leading?: boolean
  trailing?: boolean
  maxWait?: number
}

/** Functions to manage a debounced callback. */
type ControlFunctions = {
  /** Cancels pending function invocations. */
  cancel: () => void
  /** Immediately invokes pending function invocations. */
  flush: () => void
}

export type DebouncedState<T extends (...args: unknown[]) => ReturnType<T>> = ((
  ...args: Parameters<T>
) => ReturnType<T> | undefined) &
  ControlFunctions

type noop = (...args: unknown[]) => unknown

export function useDebounceFn<T extends noop>(
  fn: T,
  options?: DebounceOptions
) {
  if (__DEV__) {
    if (!isFunction(fn)) {
      console.error(
        `useDebounceFn expected parameter is a function, got ${typeof fn}`
      )
    }
  }

  const fnRef = useLatest(fn)

  const wait = options?.wait ?? ONE_SECOND_MS

  const stableCallback = useEffectEvent(
    ((...args: Parameters<T>): ReturnType<T> =>
      fnRef.current(...args) as ReturnType<T>) as T
  )

  const debounced = debounce(stableCallback, wait, options)

  useUnmount(() => debounced.cancel())

  return {
    cancel: debounced.cancel,
    flush: debounced.flush,
    run: debounced
  }
}
