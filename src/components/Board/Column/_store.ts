import { Props } from '.'
import { DropResult } from 'react-beautiful-dnd'
export default function _useStore(props: Props) {
  function onDragEnd(result: DropResult) {}
  return {
    onDragEnd,
  }
}
