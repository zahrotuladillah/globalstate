import { useDispatch } from 'react-redux';
import { addItem } from '../../store/ToDoSlice';

import './style.css'
import { useState } from "react";

// Fungsi yang berfungsi untuk menambahkan item baru
// Mengambil props method addItem yang akan digunakan pada method handleSubmit
export default function AddTodo(){
    const [state, setState] = useState({title: ""})

    const dispatch = useDispatch(addItem)
    
    const onChange = e =>{
        setState({
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const filled = state.title
        if(filled){
            const newItem= {title: state.title}
            dispatch(addItem(newItem))
            setState({title: ""})
        }
        else{
            alert("Isi dulu todo nya :D")
        }
    }
    return(
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div className='addBox' onSubmit={()=>{}}>
                <input className='addTodo' type="text" 
                    placeholder='Add ToDo' value={state.title} 
                    name="title" onChange={onChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}