import Model from "../Model"

const List: React.FC<{item: Model}> = (props) =>{
    return <li key={props.item.id}>{props.item.text}</li>
}

export default List