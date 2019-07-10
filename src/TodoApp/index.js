import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp() {
  const [todos, setTodos] = useState([])

  const handleAddTask = value => {
    setTodos(prevTodos =>
      setTodos([
        ...prevTodos,
        { id: `${Math.random(1)}-${value.title}`, title: value },
      ])
    )
  }

  return (
    <div>
      <TodoForm handleAddTask={handleAddTask} />
      <TodoList todos={todos} />
    </div>
  )
}

export default TodoApp
