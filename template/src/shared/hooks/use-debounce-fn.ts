import { useMemo } from 'react'

import debounce from 'lodash.debounce'
import { isFunction } from 'shared/utils/helper'
import useLatest from './use-lastest'
import useUnmount from './use-unmount'

interface DebounceOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
  maxWait?: number
}

type noop<Args extends unknown[] = unknown[], R = unknown> = (
  ...args: Args
) => R

export default function useDebounceFn<T extends noop>(
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

  const wait = options?.wait ?? 1000

  // biome-ignore lint/correctness/useExhaustiveDependencies: don't need deps here checking ref here to resolve issue with react complier
  const debounced = useMemo(() => {
    const d = debounce(
      (...args: Parameters<T>) => fnRef.current(...args),
      wait,
      options
    )

    return d as ((...args: Parameters<T>) => ReturnType<T>) & typeof d
  }, [])

  useUnmount(() => {
    debounced.cancel()
  })

  return {
    cancel: debounced.cancel,
    flush: debounced.flush,
    run: debounced
  }
}
