import { Props } from '.'
import { useDrag } from 'react-dnd'
import { ItemDragType } from 'src/constants/dragAndDrop'
export default function _useStore(props: Props) {
  const [dragMonitor, dragRef, preview] = useDrag(() => ({
    type: ItemDragType.Card,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    options: {
      dropEffect: 'move',
    },
  }))
  return {
    dragMonitor,
    dragRef,
  }
}
