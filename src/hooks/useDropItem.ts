import { useDrop } from 'react-dnd';
import type { DraggedItem } from '../contexts/DndContext';
import { useAppState } from './useAppState';

export function useDropItem(item: DraggedItem) {
  const { dispatch } = useAppState();
  const { id, type } = item;

  const [, dropRef] = useDrop(
    () => ({
      accept: type,
      hover: (item: DraggedItem) => {
        const draggedListId = item.id;
        const hoveredListId = id;

        if (draggedListId === hoveredListId) {
          return;
        }

        // effect too many times, cant see a reason
        // switch (item.type) {
        //   case 'COLUMN': {
        //     dispatch({ type: 'MOVE_LIST', payload: { draggedListId, hoveredListId } });
        //     break;
        //   }
        // }
      },
      drop: (item: DraggedItem) => {
        const draggedListId = item.id;
        const hoveredListId = id;

        switch (item.type) {
          case 'COLUMN': {
            dispatch({ type: 'MOVE_LIST', payload: { draggedListId, hoveredListId } });
            break;
          }
        }
      },
    }),
    [id, type, dispatch],
  );

  return { dropRef };
}
