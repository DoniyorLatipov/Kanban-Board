import './styles/App.css';
import Column from './components/Column/Column';
import { useAppState } from './hooks/useAppState';

function App() {
  const { state } = useAppState();

  return (
    <div className="kanban">
      {state.lists.map((list) => {
        return <Column title={list.title} key={list.id} id={list.id} />;
      })}
    </div>
  );
}

export default App;
