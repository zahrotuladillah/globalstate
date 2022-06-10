import { useDispatch } from "react-redux";
import { checkItem } from "../../store/ToDoSlice";
import { deleteItem } from '../../store/ToDoSlice';

import './style.css'

// Fungsi yang berfungsi untuk styling pada setiap item
// fungsi ini dipanggil untuk setiap item yang ada dalam data
// Fungsi ini juga menghandle state isDone dengan manggunakan `useState` 
export default function ListItem(props){
    const dispatch = useDispatch()
    const {item} = props
    const checkHandler=()=>{
        dispatch(checkItem(item.id))
    }
    
    return(
        <div className="todo">
            <input type="checkbox" checked={item.completed} onChange={checkHandler} className="check"/>
            {   item.completed 
                ? 
                <del className="task" style={{backgroundColor:'gainsboro'}}>{item.title}</del>
                : 
                <div className="task">{item.title}</div>
            }
            <button onClick={()=>{dispatch(deleteItem(item.id))}}>Delete</button>
        </div>
    )
}