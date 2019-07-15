import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoList from '.'

afterEach(cleanup)

describe('TodoList', () => {
  const todos = [
    {
      id: 'todo-1',
      title: 'TODO 1',
    },
    {
      id: 'todo-2',
      title: 'TODO 2',
    },
  ]

  it('should render list of todo', () => {
    const { getAllByTestId } = render(<TodoList todos={todos} />)

    const todoTitles = getAllByTestId('todo-title').map(li => li.textContent)
    const fakeTodoTitles = todos.map(t => t.title)

    expect(todoTitles).toEqual(fakeTodoTitles)
  })

  it('should render "Empty" text when no todos', () => {
    const { getByText } = render(<TodoList />)
    expect(getByText(/Empty/i)).toBeInTheDocument()
  })
})
