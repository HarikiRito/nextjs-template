import React, { FC } from 'react'
import _useState, { Props } from './_store'
import styles from './_styles.module.scss'
import { AppBoard } from 'src/components/Board'

export const KanbanBoard: FC<Props> = (props) => {
  const {} = _useState(props)
  return (
    <>
      <AppBoard />
    </>
  )
}
