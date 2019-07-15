import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import GreetingBlock from './GreetingBlock'
import { space, elemSize } from '../theme'

const BodyWrapper = styled.div`
  padding: ${space.xxl};
  height: calc(100% - ${elemSize.navbarHeight});
`

function getFilteredTodo(todos, currentMenu) {
  if (currentMenu === 'done') {
    return todos.filter(todo => todo.isFinished === true)
  }
  if (currentMenu === 'inProgress') {
    return todos.filter(todo => todo.isFinished === false)
  }

  return todos
}

export function getProgressPercentage(todos = []) {
  if (todos.length < 1) return 0

  const finishedAmount = todos.reduce((sum, todo) => todo.isFinished ? (sum = sum += 1) : sum, 0) // prettier-ignore

  return (finishedAmount / todos.length) * 100
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

  const handleChangeTitle = (value, id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, title: value } : todo))
    )
  }

  const filterTodos = getFilteredTodo(todos, currentMenu)
  const percent = getProgressPercentage(todos)
  const remainingTodos = todos.reduce((sum, todo) => !todo.isFinished ? (sum = sum += 1) : sum, 0) // prettier-ignore

  return (
    <div>
      <Navbar
        active={currentMenu}
        handleClickMenu={handleClickMenu}
        percent={percent}
      />
      <BodyWrapper>
        <GreetingBlock remainingTodos={remainingTodos} />
        <TodoForm handleAddTask={handleAddTask} />
        <TodoList
          todos={filterTodos}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
          handleChangeTitle={handleChangeTitle}
        />
      </BodyWrapper>
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
