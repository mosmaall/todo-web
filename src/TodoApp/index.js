import React from 'react'
import TodoForm from './TodoForm'

function TodoApp() {
  const handleAddTask = () => {
    console.log('yo')
  }
  return (
    <div>
      <TodoForm handleAddTask={handleAddTask} />
    </div>
  )
}

export default TodoApp
