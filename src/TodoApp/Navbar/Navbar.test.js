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
  it('should render ProgressBar and StatusTabs', () => {
    const { getByTestId } = render(<Navbar title="to-do list" />)
    expect(getByTestId('all-menu')).toBeInTheDocument()
    expect(getByTestId('progress-bar')).toBeInTheDocument()
  })
})
