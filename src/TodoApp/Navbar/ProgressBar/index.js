import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 200px;
  height: 50px;
  background: black;
`

const Progress = styled.div`
  height: inherit;
  width: ${props => props.width || 0};
  background: white;
`

const ProgressBar = props => {
  const { percent } = props
  return (
    <Container>
      <Progress data-testid="progress-bar" width={`${percent}%`} />
    </Container>
  )
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
}

export default ProgressBar
