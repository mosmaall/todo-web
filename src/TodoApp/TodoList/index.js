import React from 'react'
import PropTypes from 'prop-types'

const TodoList = props => {
  const { todos } = props

  const itemList = todos.map(todo => <li key={todo.id}>{todo.title}</li>)

  return todos.length > 0 ? <ul>{itemList}</ul> : <>Empty</>
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

TodoList.defaultProps = {
  todos: [],
}

export default TodoList
