import './styles/App.css';
import Column from './components/Column/Column';
import AddNewItem from './components/AddNewItem/AddNewItem';
import { useAppState } from './hooks/useAppState';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const { state, dispatch } = useAppState();

  return (
    <div className="kanban">
      {state.lists.map((list) => {
        return <Column title={list.title} key={list.id} id={list.id} />;
      })}

      <AddNewItem
        toogleButtonText="+ Add another list"
        onAddItem={(text) => dispatch({ type: 'ADD_LIST', payload: { title: text, id: uuidv4() } })}
        theme="primary"
      />
    </div>
  );
}

export default App;
