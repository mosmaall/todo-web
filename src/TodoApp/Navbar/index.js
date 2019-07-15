import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import StatusTabs from './StatusTabs'

const Navbar = props => {
  const { title } = props
  return (
    <div>
      <h1>{title}</h1>
      <ProgressBar />
      <StatusTabs />
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'to-do list',
}

export default Navbar
