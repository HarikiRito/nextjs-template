import React, { FC } from 'react'
import _useState from './_store'
import styles from './_styles.module.scss'
import { AppButton } from 'src/components/Button/App'
import { AppFlatButton } from 'src/components/Button/Flat'
import { Add, MoreHoriz } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import cls from 'classnames'
import { AppBoardCard } from 'src/components/Board/Card'
import {
  DragDropContext,
  Draggable,
  DraggableProvidedDraggableProps,
  DraggingStyle,
  Droppable,
} from 'react-beautiful-dnd'

export interface Props {
  children?: any
}

export const AppBoardColumn: FC<Props> = (props) => {
  const _state = _useState(props)
  const cards = [
    {
      id: 1,
      title: 'Card 1',
    },
    {
      id: 2,
      title: 'Card 2',
    },
    {
      id: 3,
      title: 'Card 3',
    },
    {
      id: 4,
      title: 'Card 4',
    },
  ]
  const { t } = useTranslation()
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
      <DragDropContext onDragEnd={_state.onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((item, index) => (
                <Draggable
                  key={item.id.toString()}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className='mt-3 first:mt-0'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <AppBoardCard title={item.title} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AppFlatButton className='normal-case mt-3' fullWidth>
        <Add />
        <div>{t('createIssue')}</div>
      </AppFlatButton>
    </div>
  )
}
