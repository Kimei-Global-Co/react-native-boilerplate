import { useEffect, useEffectEvent } from 'react'

export function useUnmount(fn: () => void) {
  const onUnmount = useEffectEvent(fn)

  useEffect(() => {
    return () => onUnmount()
  }, [])
}
