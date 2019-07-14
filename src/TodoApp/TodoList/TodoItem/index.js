import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
  const { title, id, handleRemoveTodo } = props
  return (
    <li data-testid="todo-item">
      <span>{title}</span>
      <button data-testid="remove-btn" onClick={() => handleRemoveTodo(id)}>
        Remove
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
}

export default TodoItem
