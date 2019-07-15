import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import StatusTabs from './StatusTabs'
import { elemSize, device, fontSizes, palette, space } from '../../theme'

const Header = styled.header`
  z-index: 999;
  width: 100%;
  height: ${elemSize.navbarHeight};
`

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  background: white;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 0;
  }
`

const LeftWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  width: ${elemSize.navbarLeftWidth};
  border-right: 2px solid #f8f8f8;
  padding: 0 ${space.xxl};

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
  }
`

const Navbar = props => {
  const { title, active, handleClickMenu, percent } = props
  return (
    <Header>
      <Wrapper>
        <LeftWrapper>
          <a href=".">{title}</a>
          <ProgressBar percent={percent} />
        </LeftWrapper>
        <StatusTabs active={active} handleClickMenu={handleClickMenu} />
      </Wrapper>
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
