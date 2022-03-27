import React, { useRef } from "react"
// import "./NewTodo.css"
import {styles} from './styles'

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
    const classes = styles();
    return (
        // <form className="form" onSubmit={handleClick}>
        <form className={classes.form} onSubmit={handleClick}>
            <label htmlFor="text" >Todo Text</label>
            <input type="text" id="text" ref={newTodoRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodos