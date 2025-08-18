import { useEffect, useState } from 'react'

type LazyComponentProps = {
  componentKey: string
  currentKey: string
  component: React.ReactNode
  placeholder?: React.ReactNode
}
export default function LazyComponent(
  props: LazyComponentProps
): React.ReactNode | null {
  const { componentKey, currentKey, component, placeholder } = props
  const [hasRendered, setHasRendered] = useState(false)

  useEffect(() => {
    if (!hasRendered && currentKey === componentKey) setHasRendered(true)
  }, [currentKey, componentKey, hasRendered])

  if (hasRendered) return component
  return placeholder ?? <></>
}
