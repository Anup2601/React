import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo} from "../feature/todo/todo";
import "./addForm.css"

export default function addFrom(){
    const [task,setTask]=useState("");
    const dispatch=useDispatch();

    const submitHandle=(e)=>{
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTodo(task));
            setTask("");
        }
        // dispatch(addTodo(task))
        // setTask("");


    }

    return(
        <>
            <form  className="add-form" onSubmit={submitHandle}>
                <input type="text"  placeholder="Enter a task" value={task} onChange={(e)=>setTask(e.target.value)}></input>

                <button type="submit">Add Task</button>
            </form>
        </>
    )
}