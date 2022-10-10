import React, { FC } from 'react'
import _useState from './_store'
import styles from './_styles.module.scss'
import { CheckBox, MoreHoriz } from '@mui/icons-material'
import { AppFlatButton } from 'src/components/Button/Flat'
import cls from 'classnames'

export interface Props {
  title: string
}
export const AppBoardCard: FC<Props> = (props) => {
  const { title } = props
  return (
    <div
      className={cls(
        'bg-white drop-shadow-md rounded-sm py-2 pl-3 pr-2 cursor-pointer transition-none hover:bg-gray-50 flex flex-row',
      )}
    >
      <div className='flex-1'>
        <div className=''>{title}</div>
        <div className='mt-4 flex items-center'>
          <CheckBox color='primary' fontSize='small' />
          <span className='ml-1 text-gray-600 text-sm'>KEY-1</span>
        </div>
      </div>
      <div>
        <AppFlatButton className='min-w-0 p-1'>
          <MoreHoriz />
        </AppFlatButton>
      </div>
    </div>
  )
}
