import React, { useState } from 'react'

const TodoForm = () => {
  const [value, setValue] = useState('')

  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <input placeholder="Add task" value={value} onChange={onChange} />
    </>
  )
}

export default TodoForm
