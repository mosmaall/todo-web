import React from 'react'
import PropTypes from 'prop-types'

const GreetingBlock = props => {
  const { remainTodo } = props

  return <div>{remainTodo}</div>
}

GreetingBlock.propTypes = {
  remainTodo: PropTypes.number,
}

GreetingBlock.defaultProps = {
  remainTodo: 0,
}

export default GreetingBlock
