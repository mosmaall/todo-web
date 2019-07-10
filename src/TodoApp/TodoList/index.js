import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from '../../theme'

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
  const { todos } = props

  const itemList = todos.map(todo => (
    <li key={todo.id} data-testid="todo-item">
      {todo.title}
    </li>
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
}

export default TodoList
