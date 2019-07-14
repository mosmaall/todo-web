import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`

const StatusTabs = props => {
  const { active } = props
  return (
    <div>
      <StyledButton data-testid="all-menu" active={active === 'all'}>
        All
      </StyledButton>
      <StyledButton
        data-testid="inProgress-menu"
        active={active === 'inProgress'}
      >
        In Progress
      </StyledButton>
      <StyledButton data-testid="done-menu" active={active === 'done'}>
        Done
      </StyledButton>
    </div>
  )
}

StatusTabs.propTypes = {
  active: PropTypes.string,
}

StatusTabs.defaultProps = {
  active: 'all',
}

export default StatusTabs
