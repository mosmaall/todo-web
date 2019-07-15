import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { elemSize, space, palette, device, fontSizes } from '../../../theme'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: ${elemSize.navbarRightWidth};
  justify-content: center;

  @media ${device.tablet} {
    width: 100%;
  }
`

const StyledButton = styled.button`
  margin: 0 ${space.xxs};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${fontSizes.xs};
  font-weight: bold;
  letter-spacing: 0.75px;
  color: ${props => (props.active ? palette.grey90 : palette.grey40)};
  text-decoration: ${props => (props.active ? 'underline' : 'none')};

  &:hover {
    color: ${palette.grey90};
    text-decoration: underline;
  }
`

const StatusTabs = props => {
  const { active, handleClickMenu } = props
  return (
    <Container>
      <StyledButton
        data-testid="all-menu"
        active={active === 'all'}
        onClick={() => handleClickMenu('all')}
      >
        All
      </StyledButton>
      <StyledButton
        data-testid="inProgress-menu"
        active={active === 'inProgress'}
        onClick={() => handleClickMenu('inProgress')}
      >
        In Progress
      </StyledButton>
      <StyledButton
        data-testid="done-menu"
        active={active === 'done'}
        onClick={() => handleClickMenu('done')}
      >
        Done
      </StyledButton>
    </Container>
  )
}

StatusTabs.propTypes = {
  active: PropTypes.string,
  handleClickMenu: PropTypes.func,
}

StatusTabs.defaultProps = {
  active: 'all',
}

export default StatusTabs
