import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, fontSizes, palette } from '../../theme'

const Input = styled.input`
  width: 100%;
  padding: ${space.md};
  font-size: ${fontSizes.md};
  outline: none;
  border: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  color: ${palette.primary};
  font-weight: bold;

  ::placeholder {
    color: ${palette.grey20};
  }
`

const TodoForm = props => {
  const { handleAddTask } = props
  const [value, setValue] = useState('')

  const onChange = e => {
    setValue(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (value) {
      handleAddTask(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={onSubmit} data-testid="todo-form">
      <Input
        data-testid="todo-input"
        placeholder="Add task"
        value={value}
        onChange={onChange}
        autoFocus
      />
    </form>
  )
}

TodoForm.propsType = {
  handleAddTask: PropTypes.func,
}

export default TodoForm
