import React from 'react'
import PropTypes from 'prop-types'

const TodoList = props => {
  const { todos } = props

  const itemList = todos.map(todo => <li key={todo.id}>{todo.title}</li>)

  return <ul>{itemList}</ul>
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

export default TodoList
