import React from 'react'
import PropTypes from 'prop-types'

const GreetingBlock = props => {
  const { remainingTodos } = props

  return <div>{remainingTodos} tasks to complete.</div>
}

GreetingBlock.propTypes = {
  remainingTodos: PropTypes.number,
}

GreetingBlock.defaultProps = {
  remainingTodos: 0,
}

export default GreetingBlock
