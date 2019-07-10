import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import TodoForm from '.'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('TodoForm', () => {
  it('has input', () => {
    const { getByPlaceholderText } = render(<TodoForm />)
    getByPlaceholderText('Add task')
  })
  it('can change input value', () => {
    const { getByPlaceholderText } = render(<TodoForm />)
    const input = getByPlaceholderText('Add task')
    fireEvent.change(input, {
      target: {
        value: 'NEW TASK',
      },
    })

    expect(input).toHaveAttribute('value', 'NEW TASK')
  })
  it('calls "handleAddTask" with value when press enter ', () => {
    const handleAddTask = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(
      <TodoForm handleAddTask={handleAddTask} />
    )

    const input = getByPlaceholderText('Add task')
    const form = getByTestId('todo-form')

    fireEvent.change(input, {
      target: {
        value: 'NEW TASK',
      },
    })
    fireEvent.submit(form)
    expect(handleAddTask).toHaveBeenCalledWith('NEW TASK')
  })
  it('reset value when submit form', () => {
    const handleAddTask = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(
      <TodoForm handleAddTask={handleAddTask} />
    )

    const input = getByPlaceholderText('Add task')
    const form = getByTestId('todo-form')

    fireEvent.change(input, {
      target: {
        value: 'NEW TASK',
      },
    })
    fireEvent.submit(form)

    expect(input).toHaveAttribute('value', '')
  })
})
