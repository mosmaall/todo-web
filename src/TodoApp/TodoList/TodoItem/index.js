import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
  const { title, id, isFinished, handleRemoveTodo, handleToggleTodo } = props

  const statusText = isFinished ? 'Done' : 'In Progress'

  return (
    <li data-testid="todo-item">
      <span>{title}</span>
      <p>{statusText}</p>
      <input
        type="checkbox"
        data-testid="checked-btn"
        onChange={e => handleToggleTodo(id, e.target.checked)}
      />
      <button data-testid="remove-btn" onClick={() => handleRemoveTodo(id)}>
        Remove
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  handleRemoveTodo: PropTypes.func,
  handleToggleTodo: PropTypes.func,
}

export default TodoItem
