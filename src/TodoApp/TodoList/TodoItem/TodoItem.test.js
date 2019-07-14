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

  it('should render "In Progress" text if todo is not finished', () => {
    const { getByTestId } = render(
      <TodoItem title={todo.title} isFinished={false} />
    )
    expect(getByTestId('todo-item')).toHaveTextContent('In Progress')
  })

  it('should render "Done" text if todo is finished', () => {
    const { getByTestId } = render(
      <TodoItem title={todo.title} isFinished={true} />
    )
    expect(getByTestId('todo-item')).toHaveTextContent('Done')
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

  it('call "handleToggleTodo" with id and value when click checkbox', () => {
    const handleToggleTodo = jest.fn()
    const { getByTestId } = render(
      <TodoItem
        title={todo.title}
        id={todo.id}
        handleToggleTodo={handleToggleTodo}
      />
    )

    const checkButton = getByTestId('checked-btn')
    fireEvent.click(checkButton)

    expect(handleToggleTodo).toHaveBeenCalledWith(todo.id, true || false)
  })
})
