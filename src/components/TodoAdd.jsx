import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../features/todoSlice';

const TodoAdd = ({ editingTodo, setEditingTodo }) => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        if (editingTodo) {
            setInput(editingTodo.task);
        }
    }, [editingTodo])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input || input.length <= 0) {
            return;
        }
        if(editingTodo){
            dispatch(editTodo({id:editingTodo.id, task:input}));
            setEditingTodo(null);
            setInput("");
            return;
        }
        const newTodo = {
            id: Date.now(),
            task: input
        }
        dispatch(addTodo(newTodo));
        setInput("");
    }
    return (
        <>
            <div className="container d-flex flex-column align-items-center gap-4">
                <div className="input-group align-items-stretch">
                    <span className="input-group-text">Add your tasks</span>
                    <input type="text" className="form-control" placeholder="Enter your task" value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <button onClick={handleSubmit} className='btn btn-outline-light w-30 px-5'>{editingTodo ? "Update Task" : "Add Task"}</button>
            </div>
        </>

    )
}

export default TodoAdd