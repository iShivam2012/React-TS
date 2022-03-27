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
      id:new Date().toISOString(),
      text: newText
    } 
    setTodo((prevState)=>{
      return [...prevState, item3]
    })
    
  }

  const removeTodo = (clickedId: string) => {
    let arr:Model[]= []
    todo.map(item=>{
      if(item.id !== clickedId){
        arr = [...arr, item ]
      }
    })
    setTodo(arr)
  }

  return (
    <div className="App">
      <NewTodos addNewTodo={addTodo} />
      <Todos items = {todo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
