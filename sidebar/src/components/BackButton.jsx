import * as React from 'react'
import styled from 'styled-components'

import arrow from '../assets/back-arrow.svg'

const ButtonWrapper = styled.div`
  height: 15px;
  width: 15px;

  &:hover {
    cursor: pointer;
  }
`

class BackButton extends React.Component {
  render() {
    return (
      <ButtonWrapper onClick={this.props.onClick}>
        <img src={arrow} alt="back arrow" />
      </ButtonWrapper>
    )
  }
}

export default BackButton
