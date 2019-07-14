import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
  const { title } = props
  return <div data-testid="todo-item">{title}</div>
}

TodoItem.propTypes = {
  title: PropTypes.string,
}

export default TodoItem
