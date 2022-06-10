import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import "./style.css"

// Terdapat method deleteItem dan addItem
export default function BuildHome(){
    return(
        <div>
            <div className="title">ToDo List</div>
            <AddTodo/>
            <TodoList/>
        </div>
    );
}



