import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import GreetingBlock from '.'

afterEach(cleanup)

describe('GreetingBlock', () => {
  it('show remain todo equal 0', () => {
    const { getByText } = render(<GreetingBlock remainTodo={0} />)
    expect(getByText('0')).toBeInTheDocument()
  })
  it('show remain todo equal 5', () => {
    const { getByText } = render(<GreetingBlock remainTodo={5} />)
    expect(getByText('5')).toBeInTheDocument()
  })
})
