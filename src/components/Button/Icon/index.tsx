import React, { FC } from 'react'
import _useState, { Props } from './_store'
import styles from './_styles.module.scss'
import { IconButton } from '@mui/material'

export const AppIconButton: FC<Props> = (props) => {
  const {} = _useState(props)
  return <IconButton></IconButton>
}
