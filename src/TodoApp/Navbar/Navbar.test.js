import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Navbar from '.'

afterEach(cleanup)

describe('Navbar', () => {
  it('should render title text', () => {
    const { getByText } = render(<Navbar title="to-do list" />)
    expect(getByText(/to-do list/i)).toBeInTheDocument()
  })
})
