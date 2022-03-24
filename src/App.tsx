import { useState } from 'react';
import './App.css';
import NewTodos from './components/NewTodos';
import Todos from './components/Todos';
import Model from './Model';

function App() {
  const [todo, setTodo] = useState<Model[]>([])

  // const item1: Model = {
  //   id:1,
  //   text:'Master Typescript'
  // }

  // const item2: Model = {
  //   id:2,
  //   text:'Master React'
  // }
  // let items = [
  //   item1,
  //   item2
  // ]

  const addTodo = (newText: string)=> {
    let item3: Model ={
      id:3,
      text: newText
    } 
    setTodo((prevState)=>{
      return [...prevState, item3]
    })
    
  }

  return (
    <div className="App">
      <NewTodos addNewTodo={addTodo} />
      <Todos items = {todo} />
    </div>
  );
}

export default App;
