import { useState } from 'react';
import './style.css';

export default function TodoList({list}){
    const [isDone, setIsDone] = useState(list.completed);
    return(
        <div className='todo'>{
            isDone ? <del className="task">{list.title}</del> : 
            <div style={{display: 'flex'}}>
                <div className="task">{list.title}</div>
                <button onClick={()=>{setIsDone(true)}}>Done</button> 
            </div>
        }
        </div>
    );
}