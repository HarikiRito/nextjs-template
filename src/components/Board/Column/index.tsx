import React, { FC } from 'react'
import _useState, { Props } from './_store'
import styles from './_styles.module.scss'
import { AppButton } from 'src/components/Button/App'
import { AppFlatButton } from 'src/components/Button/Flat'
import { Add, MoreHoriz } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import cls from 'classnames'
import { AppBoardCard } from 'src/components/Board/Card'
export const AppBoardColumn: FC<Props> = (props) => {
  const { t } = useTranslation('common')
  return (
    <div className={cls('p-2 bg-slate-100 rounded-lg', styles.column)}>
      <div className={cls('flex flex-row items-center', styles.header)}>
        <div
          className={cls(
            'uppercase rounded-md cursor-pointer flex-1 p-2',
            styles.title,
          )}
        >
          TODO
        </div>
        <div
          className={cls(
            'min-w-min opacity-0 transition-opacity',
            styles.option,
          )}
        >
          <AppFlatButton className='min-w-0'>
            <MoreHoriz />
          </AppFlatButton>
        </div>
      </div>
      <AppBoardCard />
      <AppFlatButton className='normal-case mt-3' fullWidth>
        <Add />
        <div>{t('createIssue')}</div>
      </AppFlatButton>
    </div>
  )
}
