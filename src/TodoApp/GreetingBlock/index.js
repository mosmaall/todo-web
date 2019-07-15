import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { device, fontSizes, palette, space } from '../../theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${space.xxxl};
  flex: 0.5;

  h1 {
    font-size: ${fontSizes.xxxl};
    font-weight: 400;
    letter-spacing: 2px;
    margin: ${space.xs} 0;
  }

  span {
    color: ${palette.primary};
    text-decoration: underline;
  }

  @media ${device.tablet} {
    padding-top: ${space.xl};
    flex: unset;
    margin-bottom: ${space.lg};

    h1 {
      font-size: ${fontSizes.xxl};
    }
  }
`

const GreetingBlock = props => {
  const { remainingTodos } = props

  return (
    <Container>
      <h1>Hello welcome back.</h1>
      <h1>
        You have <span>{remainingTodos}</span>
      </h1>
      <h1>remaining tasks</h1>
      <h1>to complete.</h1>
    </Container>
  )
}

GreetingBlock.propTypes = {
  remainingTodos: PropTypes.number,
}

GreetingBlock.defaultProps = {
  remainingTodos: 0,
}

export default GreetingBlock
