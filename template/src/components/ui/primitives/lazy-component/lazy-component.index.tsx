import { useState } from 'react'

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
  const [hasRendered, setHasRendered] = useState(currentKey === componentKey)
  const [prevCurrentKey, setPrevCurrentKey] = useState(currentKey)

  if (currentKey !== prevCurrentKey) {
    setPrevCurrentKey(currentKey)
    if (!hasRendered && currentKey === componentKey) {
      setHasRendered(true)
    }
  }

  if (hasRendered) {
    return component
  }
  return placeholder ?? null
}
