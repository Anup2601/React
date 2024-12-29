import {useSelector} from "react-redux"
import AddFrom from "./addForm";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../feature/todo/todo";
import "./todo.css"

export default function todo(){
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    const clickHandler=(id)=>{
        dispatch(deleteTodo(id))
    } 
    const clickDone=(id)=>{
        dispatch(doneTodo(id))
        // console.log(isDone);
    }
    return(
        <div className="todo-container">
            <h1 className="todo-header">Todo List</h1>
            <div className="add-form-container">
                <AddFrom />
            </div>
            <ul className="todo-list">
                {todos.map((todo)=>(
                    <li 
                        key={todo.id}
                        className={`todo-item ${todo.isDone ? "done" : ""}`}
                    >
                        {todo.task}
                        <div className="todo-buttons">
                            <button className="delete-btn" onClick={()=>clickHandler(todo.id)}>Delete</button>
                            <button className="done-btn" onClick={()=>clickDone(todo.id)}>{todo.isDone ? "Undo" : "Done"}</button>
                        </div>
                        
                    </li>
                     
                ))}
            </ul>
        </div>
    );
}