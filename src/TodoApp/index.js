import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp(props) {
  const { defaultTodos } = props
  const [todos, setTodos] = useState(defaultTodos)

  const handleAddTask = value => {
    setTodos(prevTodos =>
      setTodos([
        ...prevTodos,
        { id: `${Math.random(1)}-${value}`, title: value },
      ])
    )
  }

  const handleRemoveTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <TodoForm handleAddTask={handleAddTask} />
      <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

TodoApp.propTypes = {
  defaultTodos: PropTypes.arrayOf(Object),
}

TodoApp.defaultProps = {
  defaultTodos: [],
}

export default TodoApp
