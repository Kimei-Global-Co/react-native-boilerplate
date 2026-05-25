import { useEffect, useEffectEvent } from 'react'

import { useMutative } from 'shared/hooks/use-mutative'

type LazyComponentProps = {
  componentKey: string
  currentKey: string
  component: React.ReactNode
  placeholder?: React.ReactNode
}
export function LazyComponent(
  props: LazyComponentProps
): React.ReactNode | null {
  const { componentKey, currentKey, component, placeholder } = props
  const [hasRendered, setHasRendered] = useMutative(false)

  const callBackSetRendered = useEffectEvent(setHasRendered)

  useEffect(() => {
    if (!hasRendered && currentKey === componentKey) {
      callBackSetRendered(true)
    }
  }, [currentKey, componentKey, hasRendered])

  if (hasRendered) {
    return component
  }
  return placeholder ?? null
}
