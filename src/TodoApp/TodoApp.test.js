import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoApp, { getProgressPercentage } from '.'

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
  it('render progress bar with 50% width', () => {
    const { getByTestId } = render(<TodoApp defaultTodos={todos} />)

    expect(getByTestId('progress-bar')).toHaveStyle('width: 50%')
  })
  it('can change todo title', () => {
    const { getByTestId, getByText } = render(
      <TodoApp
        defaultTodos={[{ id: 'todo-1', title: 'TODO-1', isFinished: false }]}
      />
    )

    fireEvent.click(getByText('TODO-1'))
    const editInput = getByTestId('edit-input')
    fireEvent.change(editInput, {
      target: {
        value: 'CHANGE-TITLE',
      },
    })
    fireEvent.blur(editInput)

    expect(getByTestId('todo-item')).toHaveTextContent('CHANGE-TITLE')
  })
  it('show remaining todo equal 1', () => {
    const { getByText } = render(<TodoApp defaultTodos={todos} />)
    expect(getByText(/1 tasks/i)).toBeInTheDocument()
  })
})

describe('getProgressPercentage', () => {
  const todo50 = [
    { id: 'todo-1', title: 'TODO-1', isFinished: false },
    { id: 'todo-2', title: 'TODO-2', isFinished: true },
  ]

  const todo75 = [
    { id: 'todo-1', title: 'TODO-1', isFinished: false },
    { id: 'todo-2', title: 'TODO-2', isFinished: true },
    { id: 'todo-3', title: 'TODO-3', isFinished: true },
    { id: 'todo-4', title: 'TODO-4', isFinished: true },
  ]

  it('should equal 0', () => {
    const percent = getProgressPercentage()
    expect(percent).toBe(0)
  })

  it('should equal 50', () => {
    const percent = getProgressPercentage(todo50)
    expect(percent).toBe(50)
  })
  it('should qual 75', () => {
    const percent = getProgressPercentage(todo75)
    expect(percent).toBe(75)
  })
})
