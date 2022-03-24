import Model from "../Model"
import List from "./List"
import "./Todos.css"

const Todos: React.FC<{items: Model[]}> = (props) =>{
    return(
        <ul className="todos">
            {props.items.map(item=> <List item={item} />)}
        </ul>
    )
}
export default Todos