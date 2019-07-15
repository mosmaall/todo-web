import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import StatusTabs from './StatusTabs'

const Navbar = props => {
  const { title, currentMenu, handleClickMenu, percent } = props
  return (
    <div>
      <h1>{title}</h1>
      <ProgressBar percent={percent} />
      <StatusTabs active={currentMenu} handleClickMenu={handleClickMenu} />
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  percent: PropTypes.number,
  currentMenu: PropTypes.string,
  handleClickMenu: PropTypes.func,
}

Navbar.defaultProps = {
  title: 'to-do list',
}

export default Navbar
