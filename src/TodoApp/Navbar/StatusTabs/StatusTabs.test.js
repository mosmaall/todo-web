import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import StatusTabs from '.'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('StatusTabs', () => {
  it('have "All", "InProgress", "Done" menu', () => {
    const { getByTestId } = render(<StatusTabs />)
    expect(getByTestId('all-menu')).toBeInTheDocument()
    expect(getByTestId('inProgress-menu')).toBeInTheDocument()
    expect(getByTestId('done-menu')).toBeInTheDocument()
  })
})
