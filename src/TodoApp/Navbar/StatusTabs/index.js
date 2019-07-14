import React from 'react'
import PropTypes from 'prop-types'

const StatusTabs = props => {
  return (
    <div>
      <button data-testid="all-menu">All</button>
      <button data-testid="inProgress-menu">In Progress</button>
      <button data-testid="done-menu">Done</button>
    </div>
  )
}

StatusTabs.propTypes = {}

export default StatusTabs
