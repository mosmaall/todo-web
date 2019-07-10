import React from 'react'
import PropTypes from 'prop-types'

const TodoList = props => {
  const { todos } = props

  const itemList = todos.map(todo => <li key={todo.id}>{todo.title}</li>)

  return (
    <div data-testid="todo-list">
      {todos.length > 0 ? <ul>{itemList}</ul> : <>Empty</>}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

TodoList.defaultProps = {
  todos: [],
}

export default TodoList
