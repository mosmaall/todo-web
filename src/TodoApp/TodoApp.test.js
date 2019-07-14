import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoApp from '.'

afterEach(cleanup)

describe('TodoApp', () => {
  const todos = [
    { id: 'todo-1', title: 'TODO-1', isFinished: false },
    { id: 'todo-2', title: 'TODO-2', isFinished: true },
  ]

  it('render TodoForm and TodoList', () => {
    const { getByTestId } = render(<TodoApp />)
    getByTestId('todo-list')
    getByTestId('todo-form')
  })
  it('create new todo', () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(<TodoApp />)

    const input = getByPlaceholderText('Add task')
    const form = getByTestId('todo-form')

    fireEvent.change(input, {
      target: {
        value: 'NEW TASK',
      },
    })
    fireEvent.submit(form)

    getByText('NEW TASK')
  })
  it('remove todo when click remove button', () => {
    const { getByTestId, queryByText } = render(
      <TodoApp defaultTodos={[{ id: 'todo-1', title: 'TODO-1' }]} />
    )

    const delButton = getByTestId('remove-btn')
    fireEvent.click(delButton)

    expect(queryByText('TODO-1')).toBeNull()
  })
  it('can change todo status', () => {
    const { getByTestId, getByText } = render(
      <TodoApp
        defaultTodos={[{ id: 'todo-1', title: 'TODO-1', isFinished: false }]}
      />
    )

    const checkedButton = getByTestId('checked-btn')
    fireEvent.click(checkedButton)
    expect(getByTestId('todo-item')).toHaveTextContent('Done')
    fireEvent.click(checkedButton)
    expect(getByTestId('todo-item')).toHaveTextContent('In Progress')
  })
  it('show only in progress todo when clicked In Progress menu', () => {
    const { getByTestId, getAllByTestId } = render(
      <TodoApp defaultTodos={todos} />
    )
    const inProgressMenu = getByTestId('inProgress-menu')

    fireEvent.click(inProgressMenu)
    expect(getByTestId('todo-item')).toHaveTextContent('TODO-1')
  })
})

describe('getProgressPercentage', () => {
  it('should equal 50', () => {
    const percent = getProgressPercentage(todos)
    expect(percent).toBe(50)
  })
})
