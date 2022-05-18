import { useState } from 'react'

export interface Props {
  children?: any
}
export default function _useStore(props: Props) {
  const [count, setCount] = useState(0)

  function onClick() {
    setCount(count + 1)
  }

  return {
    count,
    onClick,
  }
}
