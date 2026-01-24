import { useDrag } from 'react-dnd';
import type { DraggedItem } from '../contexts/DndContext';
import { useAppState } from './useAppState';

export function useDragItem(item: DraggedItem) {
  const { dispatch } = useAppState();
  const { id, type } = item;

  const [, dragRef] = useDrag(
    () => ({
      type,
      item: () => {
        dispatch({ type: 'SET_DRAGGED_ITEM', payload: { id, type } });

        return { id, type };
      },
      end: () => {
        dispatch({ type: 'SET_DRAGGED_ITEM', payload: null });
      },
    }),
    [id, type, dispatch],
  );

  return { dragRef };
}
