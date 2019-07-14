import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoApp from '.'

afterEach(cleanup)

describe('TodoApp', () => {
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
    expect(getByText('Done')).toBeInTheDocument()
    fireEvent.click(checkedButton)
    expect(getByText('In Progress')).toBeInTheDocument()
  })
})
