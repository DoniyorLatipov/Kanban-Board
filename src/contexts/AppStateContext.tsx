import React, { createContext, useReducer } from 'react';
import swapItemsById from '../utils/swapItemsById';

interface list {
  title: string;
  id: string;
}

interface task {
  text: string;
  id: string;
  listId: string;
}

interface AppState {
  lists: list[];
  tasks: task[];
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const appData: AppState = {
  lists: [],
  tasks: [],
};

interface AddListAction {
  type: 'ADD_LIST';
  payload: { title: string; id: string };
}

interface AddTaskAction {
  type: 'ADD_TASK';
  payload: { text: string; id: string; listId: string };
}

interface MoveListAction {
  type: 'MOVE_LIST';
  payload: { draggedListId: string; hoveredListId: string };
}

type Action = AddListAction | AddTaskAction | MoveListAction;

function AppStateReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_LIST': {
      const { title, id } = action.payload;

      return {
        ...state,
        lists: [...state.lists, { title, id }],
      };
    }
    case 'ADD_TASK': {
      const { text, id, listId } = action.payload;

      return {
        ...state,
        tasks: [...state.tasks, { text, id, listId }],
      };
    }
    case 'MOVE_LIST': {
      const { draggedListId, hoveredListId } = action.payload;

      return { ...state, lists: swapItemsById(state.lists, draggedListId, hoveredListId, true) };
    }
    default: {
      console.error('Unknown ction type for Reducer');
      return { ...state };
    }
  }
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

function AppStateProvide({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(AppStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
  );
}

export { AppStateContext, AppStateProvide };
