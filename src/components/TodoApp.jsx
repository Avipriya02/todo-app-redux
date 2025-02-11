import React, { useState } from 'react'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

const TodoApp = () =>{
 const [editingTodo, setEditingTodo] = useState(null);
  return (
    <div className="container mx-auto my-4" style={{maxWidth:"1000px"}}>
        <TodoAdd editingTodo={editingTodo} setEditingTodo= {setEditingTodo} />
        <TodoList setEditingTodo = {setEditingTodo}/>
    </div>
  )
}

export default TodoApp