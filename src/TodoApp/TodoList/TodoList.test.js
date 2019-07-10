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
    const { getByText } = render(<TodoList todos={todos} />)
    getByText(todos[0].title)
    getByText(todos[1].title)
  })

  it('should render "Empty" text', () => {
    const { getByText } = render(<TodoList todos={[]} />)
    getByText('Empty')
  })
})
