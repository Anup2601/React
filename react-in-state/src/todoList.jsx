import { useState } from "react";
import {v4 as uuidv4} from "uuid";

let todoList=()=>{

    let [add,setadd]=useState([{task:"sample-task",id:uuidv4(),isdone:false}]);
    let [newadd,setnewadd]=useState("");
    let newtask=()=>{
        if (newadd.trim() !== "") {
        setadd((pretask)=>{
            return [...pretask,{task:newadd,id:uuidv4(),isdone:false}]
        })
        setnewadd("")
        }}
    let updatetodo=(event)=>{
        setnewadd(event.target.value)
    }

    let deleteTask=(id)=>{
        setadd((pretask)=>
            pretask.filter((pretask)=>
                pretask.id!=id
            )
        )
    }

    let updateAll=()=>{
        setadd((pretask)=>
            pretask.map((adds)=>{
                return{
                    ...adds,isdone:true,
                }
            })
        )
    }

    let compliteTask=(id)=>{
        setadd((pretask)=>
            pretask.map((adds)=>
                id===adds.id?{...adds,isdone:true}:adds
            )
            
    )
    }


    let Highlight=(id)=>{
        
            setadd((pretask)=>
                pretask.map((adds)=>
                    id===adds.id?{...adds,task:adds.task.toUpperCase()}:adds
                
                )
            )
        }

    return(
        <div>
            <h1>Todo List</h1>
            <input placeholder="Enter task" value={newadd} onChange={updatetodo}></input>
            <button onClick={newtask}>Add</button>
            <h4>Tasks</h4>
            <ul>
                {add.map((adds)=>(
                    <li key={adds.id}>
                    <span style={adds.isdone?{textDecorationLine:"line-through"}:{}}>
                    {adds.task}
                    </span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>deleteTask(adds.id)}>Delete</button>
                    <button onClick={()=>Highlight(adds.id)}>Hi-light</button>
                    <button onClick={()=>{compliteTask(adds.id)}}>Complite</button>
                    </li>
                    
                ))}
            </ul>
            <button onClick={updateAll}>UpdateAll</button>
        </div>
    )
}

export default todoList;