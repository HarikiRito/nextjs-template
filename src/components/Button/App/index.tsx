import React, { FC } from 'react'
import _useStore, { Props } from './_store'
import styles from './_styles.module.scss'
import { Button } from '@mui/material'

export const AppButton: FC<Props> = (props) => {
  const { children, ...rest } = props
  return <Button {...rest}>{children}</Button>
}
