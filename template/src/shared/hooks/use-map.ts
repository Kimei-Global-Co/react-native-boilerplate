import { useState } from 'react'

export default function useMap<K, T>(initialValue?: Iterable<readonly [K, T]>) {
  const getInitValue = () => new Map(initialValue)
  const [map, setMap] = useState<Map<K, T>>(getInitValue)

  const set = (key: K, entry: T) => {
    setMap((prev) => {
      const temp = new Map(prev)
      temp.set(key, entry)
      return temp
    })
  }

  const setAll = (newMap: Iterable<readonly [K, T]>) => {
    setMap(new Map(newMap))
  }

  const remove = (key: K) => {
    setMap((prev) => {
      const temp = new Map(prev)
      temp.delete(key)
      return temp
    })
  }

  const reset = () => setMap(getInitValue())

  const get = (key: K) => map.get(key)

  return [
    map,
    {
      get,
      remove,
      reset,
      set,
      setAll
    }
  ] as const
}
