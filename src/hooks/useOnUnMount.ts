import { useEffect } from 'react'

export function useOnUnMount(callback: () => void) {
  useEffect(() => {
    return callback
  }, [])
}
