import React, { createContext } from 'react';

interface list {
  title: string;
  id: number;
}

interface task {
  text: string;
  id: number;
  listId: number;
}

interface AppState {
  lists: list[];
  tasks: task[];
}

interface AppStateContextProps {
  state: AppState;
}

const appData: AppState = {
  lists: [
    { title: 'To Do', id: 1 },
    { title: 'In progress', id: 2 },
    { title: 'Done', id: 3 },
  ],
  tasks: [
    { text: 'Generate app scaffold', id: 1, listId: 1 },
    { text: 'Learn TypeScript', id: 2, listId: 2 },
    { text: 'Begin to use static typing', id: 3, listId: 3 },
  ],
};

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

function AppStateProvide({ children }: React.PropsWithChildren) {
  return <AppStateContext.Provider value={{ state: appData }}>{children}</AppStateContext.Provider>;
}

export { AppStateContext, AppStateProvide };
