import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ProgressBar from '.'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('ProgressBar', () => {
  const todos = [
    {
      id: 'todo-1',
      title: 'TODO-1',
      isFinished: false,
    },
    {
      id: 'todo-2',
      title: 'TODO-2',
      isFinished: false,
    },
  ]

  it('render progress bar', () => {
    const { getByTestId } = render(<ProgressBar />)
    expect(getByTestId('progress-bar')).toBeInTheDocument()
  })
  it('has style width equal 0%', () => {
    const { getByTestId } = render(<ProgressBar percent={0} />)
    expect(getByTestId('progress-bar')).toHaveStyle('width: 0%')
  })
})
