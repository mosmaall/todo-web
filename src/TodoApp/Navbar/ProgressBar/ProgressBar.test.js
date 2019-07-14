import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ProgressBar from '.'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('ProgressBar', () => {
  it('render progress bar', () => {
    const { getByTestId } = render(<ProgressBar />)
    expect(getByTestId('progress-bar')).toBeInTheDocument()
  })
})
