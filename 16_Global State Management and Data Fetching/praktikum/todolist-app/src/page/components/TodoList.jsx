import { useSelector } from 'react-redux';
import './style.css';
import ListItem from './ListItem';

// Fungsi untuk membungkus konten list data dalam home dan memanggil fungsi ListItem untuk setiap item yang ada pada data
// Fungsi ini memberikan passing props lists
export default function TodoList(){
    // const {lists, deleteItem} = props
    const todos = useSelector((state)=>state.todo.todos)
    return(
        <div className='content' style={{display: 'flex', justifyContent: 'center'}}>
            <div className='data'>
                {todos.map((list) => (<ListItem key={list.id} item={list}/>))}
                {todos.length===0 &&
                    <div className="task" style={{textAlign: "center", margin: "0", color: "red"}}>
                        Belum ada task
                    </div>
                }
            </div>
        </div>
    );
}