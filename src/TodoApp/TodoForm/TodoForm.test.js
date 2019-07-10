import React from 'react'
import { render, cleanup } from '@testing-library/react'
import TodoForm from '.'

afterEach(cleanup)

describe('TodoForm', () => {
  it('has input', () => {
    const { getByPlaceholderText } = render(<TodoForm />)
    getByPlaceholderText('Add task')
  })
})
