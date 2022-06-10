import { createSlice } from  '@reduxjs/toolkit'
import { dataList } from '../dataList'
import { v4 as uidv4 } from "uuid"

const initialValue = dataList

export const TodoSlice =  createSlice({
    name : "todo",
    initialState : {
        todos : initialValue
    },
    reducers : {
        deleteItem : (state, action) => {
            state.todos = state.todos.filter((item) => {return item.id !== action.payload})
        },
        addItem : (state, action) => {
            const newItem = { id : uidv4(), completed : false, ...action.payload}
            // setData((oldData)=> [...oldData, newItem])
            state.todos = [...state.todos, newItem]
        },
        checkItem : (state, action) => {
            state.todos.forEach((item)=> {
                if(item.id === action.payload){
                    item.completed = (!item.completed)
                }
            })
            
            state.todos = [...state.todos]
        }
    }
})

export const { deleteItem, addItem, checkItem } = TodoSlice.actions
export default TodoSlice.reducer
