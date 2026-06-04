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

  if (!hasRendered && currentKey === componentKey) {
    setHasRendered(true)
  }

  if (hasRendered || currentKey === componentKey) {
    return component
  }
  return placeholder ?? null
}
