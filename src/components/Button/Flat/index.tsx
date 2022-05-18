import React, { FC } from 'react'
import _useStore, { Props } from './_store'
import styles from './_styles.module.scss'
import { Button } from '@mui/material'

export const FlatButton: FC<Props> = (props) => {
  const _store = _useStore(props)
  return (
    <Button onClick={_store.onClick}>
      {props.children} {_store.count}
    </Button>
  )
}
