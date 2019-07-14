import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import StatusTabs from './Navbar/StatusTabs'

function getFilteredTodo(todos, currentMenu) {
  if (currentMenu === 'done') {
    return todos.filter(todo => todo.isFinished === true)
  }
  if (currentMenu === 'inProgress') {
    return todos.filter(todo => todo.isFinished === false)
  }

  return todos
}

function TodoApp(props) {
  const { defaultTodos } = props
  const [todos, setTodos] = useState(defaultTodos)
  const [currentMenu, setCurrentMenu] = useState('all')

  const handleAddTask = value => {
    setTodos(prevTodos =>
      setTodos([
        ...prevTodos,
        { id: `${Math.random(1)}-${value}`, title: value, isFinished: false },
      ])
    )
  }

  const handleRemoveTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleTodo = (id, checked) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isFinished: checked } : todo
      )
    )
  }

  const handleClickMenu = value => {
    setCurrentMenu(value)
  }

  const filterTodos = getFilteredTodo(todos, currentMenu)

  return (
    <div>
      <StatusTabs active={currentMenu} handleClickMenu={handleClickMenu} />
      <TodoForm handleAddTask={handleAddTask} />
      <TodoList
        todos={filterTodos}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleTodo={handleToggleTodo}
      />
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
