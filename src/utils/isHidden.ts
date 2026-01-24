import type { DraggedItem, DraggedItemTypes } from '../contexts/DndContext';

export const isHidden = (
  draggedItem: DraggedItem | null,
  itemType: DraggedItemTypes,
  id: string,
): boolean => {
  return Boolean(draggedItem && draggedItem.type === itemType && draggedItem.id === id);
};
