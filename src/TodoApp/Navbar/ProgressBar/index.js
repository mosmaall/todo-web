import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSizes, space, palette, elemSize } from '../../../theme'

const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: ${fontSizes.xxxxs};
    margin-right: ${space.sm};
    color: ${palette.primary};
    letter-spacing: 1px;
  }
`

const Wrapper = styled.div`
  display: inline-block;
  width: ${elemSize.progreesWidth};
  height: ${elemSize.progressHeight};
  background: ${palette.primaryLighten};
`

const Progress = styled.div`
  height: inherit;
  width: ${props => props.width || 0};
  background: ${palette.primary};
  transition: width 0.4s ease-in;
`

const ProgressBar = props => {
  const { percent } = props
  return (
    <Container>
      <span>PROGRESS</span>
      <Wrapper>
        <Progress data-testid="progress-bar" width={`${percent}%`} />
      </Wrapper>
    </Container>
  )
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
}

export default ProgressBar
