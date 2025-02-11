import { createSlice } from "@reduxjs/toolkit";

let  initialState = [];

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            state.push({...action.payload,complted: false});
        },
        removeTodo: (state, action) =>{
            return state.filter((todo)=>action.payload !== todo.id);
        },
        editTodo: (state, action) => {
            const {id, task} = action.payload;
            const todoEdit = state.find(todo=>todo.id === id);
            if(todoEdit){
                todoEdit.task = task;
            }
        },
        toggleComplete: (state, action) => {
            const completedTodo = state.find(todo=>todo.id===action.payload);
            if(completedTodo){
                completedTodo.completed = !completedTodo.completed;
            }
        }
    }
})

export const {addTodo, removeTodo, editTodo,toggleComplete} = todoSlice.actions;

export default todoSlice.reducer;