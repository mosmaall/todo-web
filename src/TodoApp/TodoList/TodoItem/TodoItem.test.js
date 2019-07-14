import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoItem from '.'

afterEach(cleanup)

describe('TodoItem', () => {
  it('should render title text', () => {
    const { getByTestId } = render(<TodoItem title="Have a lunch" />)
    expect(getByTestId('todo-item')).toHaveTextContent('Have a lunch')
  })
})
