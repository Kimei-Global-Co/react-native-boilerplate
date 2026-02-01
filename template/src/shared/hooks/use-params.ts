import { useRoute } from '@react-navigation/native'

export default function useParams<T>(param: string, defaultValue: T): T {
  const route = useRoute()
  if (route.params) {
    return (route.params as Record<string, T>)[param] || defaultValue
  }
  return defaultValue
}
