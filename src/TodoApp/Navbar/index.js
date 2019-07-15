import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import StatusTabs from './StatusTabs'
import { elemSize, device, fontSizes, palette, space } from '../../theme'

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  width: 100%;
  background: white;

  @media ${device.tablet} {
    padding-bottom: ${space.lg};
    border-bottom: 1px solid ${palette.grey1};
  }
`

const LeftWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  justify-content: space-between;
  width: ${elemSize.navbarLeftWidth};
  border-right: 2px solid ${palette.grey1};
  padding: ${space.xxl} ${space.xxxl};

  a {
    font-size: ${fontSizes.xl};
    font-weight: bold;
    color: ${palette.grey80};
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }

  @media ${device.tablet} {
    border-right: none;
    width: 100%;
  }
`

const Navbar = props => {
  const { title, active, handleClickMenu, percent } = props
  return (
    <Header>
      <LeftWrapper>
        <a href=".">{title}</a>
        <ProgressBar percent={percent} />
      </LeftWrapper>
      <StatusTabs active={active} handleClickMenu={handleClickMenu} />
    </Header>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  percent: PropTypes.number,
  active: PropTypes.string,
  handleClickMenu: PropTypes.func,
}

Navbar.defaultProps = {
  title: 'to-do list',
}

export default Navbar
