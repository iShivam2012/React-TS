import './App.css';
import Todos from './components/Todos';
import Model from './Model';

function App() {
  const item1: Model = {
    id:1,
    text:'Master Typescript'
  }

  const item2: Model = {
    id:2,
    text:'Master React'
  }
  const items = [
    item1,
    item2
  ]
  return (
    <div className="App">
      <Todos items = {items} />
    </div>
  );
}

export default App;
