import './styles/App.css';
import Column from './components/Column/Column';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="kanban">
      <Column title="To Do">
        <Card text="Generate app scaffold" />
      </Column>

      <Column title="In progress">
        <Card text="Learn TypeScript" />
      </Column>

      <Column title="Done">
        <Card text="Begin to use static typing"></Card>
      </Column>
    </div>
  );
}

export default App;
