import React, { FC } from 'react'
import _useState from './_store'
import styles from './_styles.module.scss'
import { CheckBox, MoreHoriz } from '@mui/icons-material'
import { AppFlatButton } from 'src/components/Button/Flat'

export interface Props {}
export const AppBoardCard: FC<Props> = (props) => {
  const {} = _useState(props)
  return (
    <div className='bg-white drop-shadow-md rounded-sm py-2 pl-3 pr-2 cursor-pointer hover:bg-gray-50 transition-colors flex flex-row'>
      <div className='flex-1'>
        <div className=''>Build UI</div>
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
