import Model from "../Model"
import List from "./List"
import "./Todos.css"

const Todos: React.FC<{items: Model[], removeTodo:(clickedId: string)=>void}> = (props) =>{
    return(
        <ul className="todos">
            {props.items.map(item=> <List item={item} removeTodo={props.removeTodo} />)}
        </ul>
    )
}
export default Todos