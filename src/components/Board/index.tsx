import React, { FC } from 'react'
import _useState, { Props } from './_store'
import styles from './_styles.module.scss'
import { AppBoardColumn } from 'src/components/Board/Column'

export const AppBoard: FC<Props> = (props) => {
  const {} = _useState(props)
  return (
    <div className={styles.container}>
      <AppBoardColumn />
    </div>
  )
}
