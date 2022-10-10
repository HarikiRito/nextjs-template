import React, { FC } from 'react'
import styles from './_styles.module.scss'
import { AppBoardColumn } from 'src/components/Board/Column'

interface Props {}
export const AppBoard: FC<Props> = (props) => {
  return (
    <div>
      <AppBoardColumn />
    </div>
  )
}
