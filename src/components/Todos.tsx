import Model from "../Model"
import List from "./List"

const Todos: React.FC<{items: Model[]}> = (props) =>{
    return(
        <ul>
            {props.items.map(item=> <List item={item} />)}
        </ul>
    )
}
export default Todos