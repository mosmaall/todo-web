import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoItem from '.'

afterEach(cleanup)

describe('TodoItem', () => {
  const todo = {
    id: 'todo-1',
    title: 'Have a lunch',
  }

  it('should render title text', () => {
    const { getByTestId } = render(<TodoItem title={todo.title} />)
    expect(getByTestId('todo-item')).toHaveTextContent('Have a lunch')
  })

  it('should render a checkbox', () => {
    const { getByTestId } = render(<TodoItem title={todo.title} />)
    expect(getByTestId('checked-btn')).toBeInTheDocument()
  })

  it('call "handleDelete" with id when click remove button', () => {
    const handleRemoveTodo = jest.fn()
    const { getByTestId } = render(
      <TodoItem
        title={todo.title}
        id={todo.id}
        handleRemoveTodo={handleRemoveTodo}
      />
    )
    const delButton = getByTestId('remove-btn')

    fireEvent.click(delButton)

    expect(handleRemoveTodo).toHaveBeenCalledWith(todo.id)
  })
})
