import { useCallback, useRef } from 'react'

export function useLockFn<P extends unknown[], V>(
  fn: (...args: P) => Promise<V>
) {
  const lockRef = useRef(false)

  return useCallback(
    (...args: P): Promise<V> | undefined => {
      if (lockRef.current) {
        return
      }

      lockRef.current = true

      const p = fn(...args)

      p.finally(() => {
        lockRef.current = false
      })

      return p
    },
    [fn]
  )
}
