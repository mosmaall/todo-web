import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import TodoForm from '.'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('TodoForm', () => {
  it('has input', () => {
    const { getByTestId } = render(<TodoForm />)
    expect(getByTestId('todo-input')).toBeInTheDocument()
  })
  it('can change input value', () => {
    const { getByTestId } = render(<TodoForm />)
    const input = getByTestId('todo-input')
    fireEvent.change(input, {
      target: {
        value: 'NEW TASK',
      },
    })

    expect(input).toHaveAttribute('value', 'NEW TASK')
  })
  it('calls "handleAddTask" with value and reset when submit form', () => {
    const handleAddTask = jest.fn()
    const { getByTestId } = render(<TodoForm handleAddTask={handleAddTask} />)

    const input = getByTestId('todo-input')
    const form = getByTestId('todo-form')

    fireEvent.change(input, {
      target: {
        value: 'NEW TASK',
      },
    })
    fireEvent.submit(form)
    expect(handleAddTask).toHaveBeenCalledWith('NEW TASK')
    expect(input).toHaveAttribute('value', '')
  })
})
