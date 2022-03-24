import Model from "../Model"
import './List.css'

const List: React.FC<{item: Model}> = (props) =>{
    return <li className="item" key={props.item.id}>{props.item.text}</li>
}

export default List