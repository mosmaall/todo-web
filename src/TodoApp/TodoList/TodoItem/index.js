import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
  const { title, id, handleRemoveTodo } = props
  return (
    <div data-testid="todo-item">
      {title}
      <button data-testid="remove-btn" onClick={() => handleRemoveTodo(id)}>
        Remove
      </button>
    </div>
  )
}

TodoItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
}

export default TodoItem
