import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:123, task:"demo-task", isDone:false}]
}

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                isDone:false
            };
            state.todos.push(newTodo);
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo) => todo.id !== action.payload);
        },
        doneTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    return{...todo,isDone: !todo.isDone};
                }
                return todo;
            });
        },
    },
});
export const {addTodo, deleteTodo, doneTodo}=todoSlice.actions;
export default todoSlice.reducer;