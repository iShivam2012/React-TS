import Model from "../Model"
import './List.css'

const List: React.FC<{item: Model, removeTodo:(clickedId: string)=>void}> = (props) =>{
    // console.log(props.item.id)
    const handleClick = ()=>{
        props.removeTodo(props.item.id)
    }
    return <li onClick={handleClick} className="item" key={props.item.id}>{props.item.text}</li>
}

export default List