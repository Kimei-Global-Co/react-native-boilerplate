import { useEffect } from 'react'

import { typeGuards } from 'shared/utils/helper'
import { useLatest } from './use-latest'

export function useUnmount(fn: () => void) {
  if (__DEV__) {
    if (!typeGuards(fn, 'function')) {
      console.error(
        `useUnmount expected parameter is a function, got ${typeof fn}`
      )
    }
  }

  const fnRef = useLatest(fn)

  // biome-ignore lint/correctness/useExhaustiveDependencies: fbRef passing to deps will be ignored cause react compiler can not be working anymore
  useEffect(
    () => () => {
      fnRef.current()
    },
    []
  )
}
