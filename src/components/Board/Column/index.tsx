import React, { FC } from 'react'
import _useState, { Props } from './_store'
import styles from './_styles.module.scss'
import { AppButton } from 'src/components/Button/App'
import { AppFlatButton } from 'src/components/Button/Flat'
import { Add, MoreHoriz } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
export const AppBoardColumn: FC<Props> = (props) => {
  const { t } = useTranslation('common')
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <div className={styles.title}>TODO</div>
        <div className={styles.moreOption}>
          <AppFlatButton className={styles.button}>
            <MoreHoriz />
          </AppFlatButton>
        </div>
      </div>
      <AppFlatButton className={styles.createIssue} fullWidth>
        <Add />
        <div>{t('createIssue')}</div>
      </AppFlatButton>
    </div>
  )
}
