import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import GreetingBlock from './GreetingBlock'
import { space, device } from '../theme'

import { images } from '../constants'

const BodyWrapper = styled.div`
  display: flex;
  padding: 0 ${space.xxxl};

  @media ${device.tablet} {
    flex-direction: column;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;

  @media ${device.tablet} {
    flex: 1;
  }
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
    const imageNum = Math.floor(Math.random() * 4)
    setTodos(prevTodos =>
      setTodos([
        ...prevTodos,
        {
          id: `${Math.random(1)}-${value}`,
          title: value,
          isFinished: false,
          imgURL: images[imageNum],
        },
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
    <>
      <Navbar
        active={currentMenu}
        handleClickMenu={handleClickMenu}
        percent={percent}
      />
      <BodyWrapper>
        <GreetingBlock remainingTodos={remainingTodos} />
        <Box>
          <TodoForm handleAddTask={handleAddTask} />
          <TodoList
            todos={filterTodos}
            handleRemoveTodo={handleRemoveTodo}
            handleToggleTodo={handleToggleTodo}
            handleChangeTitle={handleChangeTitle}
          />
        </Box>
      </BodyWrapper>
    </>
  )
}

TodoApp.propTypes = {
  defaultTodos: PropTypes.arrayOf(Object),
}

TodoApp.defaultProps = {
  defaultTodos: [],
}

export default TodoApp
