import { useEffect, useEffectEvent } from 'react'

import type { DebounceOptions } from './use-debounce-fn'
import { useDebounceFn } from './use-debounce-fn'
import { useMutative } from './use-mutative'

export function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debounced, setDebounced] = useMutative(value)

  const { run } = useDebounceFn(() => setDebounced(() => value), options)

  const runDebounced = useEffectEvent(() => run())

  // biome-ignore lint/correctness/useExhaustiveDependencies: value should be in deps
  useEffect(() => {
    runDebounced()
  }, [value])

  return debounced
}
