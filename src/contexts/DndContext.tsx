import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export type DraggedItemTypes = 'COLUMN' | 'CARD';

export type DraggedItem = { id: string; type: DraggedItemTypes };

export function DragDropProvider({ children }: React.PropsWithChildren) {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
