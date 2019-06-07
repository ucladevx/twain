import * as React from 'react'
import styled from 'styled-components'

import arrow from '../assets/forward-arrow.svg'

const ButtonWrapper = styled.div`
  height: 15px;
  width: 15px;

  &:hover {
    cursor: pointer;
  }
`

class ForwardButton extends React.Component {
  render() {
    return (
      <ButtonWrapper onClick={this.props.onClick}>
        <img src={arrow} alt="forward arrow" />
      </ButtonWrapper>
    )
  }
}

export default ForwardButton
