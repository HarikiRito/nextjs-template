import React, { FC } from 'react'
import _useState, { Props } from './_store'
import { Button } from '@mui/material'
import styles from './_styles.module.scss'
import cls from 'classnames'
export const AppFlatButton: FC<Props> = (props) => {
  const {} = _useState(props)
  const { children, className, ...rest } = props
  return (
    <Button className={cls('text-black', className)} {...rest}>
      {children}
    </Button>
  )
}
