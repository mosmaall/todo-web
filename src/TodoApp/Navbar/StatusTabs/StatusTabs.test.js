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
  it('show active on All menu by default', () => {
    const { getByTestId } = render(<StatusTabs />)
    expect(getByTestId('all-menu')).toHaveStyle('text-decoration: underline')
  })
  it('show active on InProgress menu', () => {
    const { getByTestId } = render(<StatusTabs active="inProgress" />)
    expect(getByTestId('inProgress-menu')).toHaveStyle(
      'text-decoration: underline'
    )
  })
  it('show active on Done menu', () => {
    const { getByTestId } = render(<StatusTabs active="done" />)
    expect(getByTestId('done-menu')).toHaveStyle('text-decoration: underline')
  })
})
