import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TodoForm = props => {
  const { handleAddTask } = props
  const [value, setValue] = useState('')

  const onChange = e => {
    setValue(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    handleAddTask(value)
    setValue('')
  }

  return (
    <form onSubmit={onSubmit} data-testid="todo-form">
      <input placeholder="Add task" value={value} onChange={onChange} />
      <button type="submit">Add task</button>
    </form>
  )
}

TodoForm.propsType = {
  handleAddTask: PropTypes.func,
}

export default TodoForm
