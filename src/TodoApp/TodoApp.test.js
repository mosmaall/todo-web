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
})
