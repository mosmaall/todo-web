import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from '../../theme'
import TodoItem from './TodoItem'

const Container = styled.div`
  margin-top: ${space.md};

  ul {
    list-style-type: none;
    padding-inline-start: 0;

    li {
      margin-bottom: ${space.md};
      padding: ${space.md};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
`

const TodoList = props => {
  const { todos, handleRemoveTodo } = props

  const itemList = todos.map(todo => (
    <TodoItem
      key={todo.id}
      title={todo.title}
      id={todo.id}
      handleRemoveTodo={handleRemoveTodo}
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
}

export default TodoList
