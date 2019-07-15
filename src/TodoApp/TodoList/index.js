import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from '../../theme'
import TodoItem from './TodoItem'

const Container = styled.div`
  height: calc(100vh - 200px);
  margin-top: ${space.md};
  overflow-y: auto;
  padding: 0 ${space.xs};

  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
`

const TodoList = props => {
  const { todos, handleRemoveTodo, handleToggleTodo, handleChangeTitle } = props

  const itemList = todos.map(todo => (
    <TodoItem
      key={todo.id}
      title={todo.title}
      id={todo.id}
      imgURL={todo.imgURL}
      handleRemoveTodo={handleRemoveTodo}
      handleToggleTodo={handleToggleTodo}
      handleChangeTitle={handleChangeTitle}
      isFinished={todo.isFinished}
    />
  ))

  return (
    <Container data-testid="todo-list">
      {todos.length > 0 ? <ul>{itemList}</ul> : <>Empty</>}
    </Container>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

TodoList.defaultProps = {
  todos: [],
  handleRemoveTodo: PropTypes.func,
  handleToggleTodo: PropTypes.func,
  handleChangeTitle: PropTypes.func,
}

export default TodoList
