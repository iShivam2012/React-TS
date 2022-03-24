import React, { useRef } from "react"
import "./NewTodo.css"

const NewTodos: React.FC<{addNewTodo: (text: string)=>void}> = (props) => {
    const newTodoRef =  useRef<HTMLInputElement>(null)
    const handleClick = (event: React.FormEvent) => {
        event.preventDefault();
        let text = newTodoRef.current!.value;
        if(text.trim().length === 0){
            return
        }
        props.addNewTodo(text)
        
    }
    return (
        <form className="form" onSubmit={handleClick}>
            <label htmlFor="text" >Todo Text</label>
            <input type="text" id="text" ref={newTodoRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodos