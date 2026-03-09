import { useEffect, useEffectEvent } from 'react'

export function useTimeout(callback: () => void, delay: number | null): void {
  const onTimeout = useEffectEvent(callback)

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const id = setTimeout(() => {
      onTimeout()
    }, delay)

    return () => clearTimeout(id)
  }, [delay])
}
