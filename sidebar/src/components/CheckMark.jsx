import * as React from 'react'
import styled from 'styled-components'

import checkmark from '../assets/check-mark.svg'

const CheckMarkWrapper = styled.div`
  height: 18px;
  width: 18px;
  float: left;
  margin: 0.75em 0.215em;
  display: inline;

  &:hover {
    cursor: pointer;
  }
`

class CheckMark extends React.Component {
  render() {
    return (
      <CheckMarkWrapper onClick={this.props.onClick}>
        <img src={checkmark} alt="check mark" />
      </CheckMarkWrapper>
    )
  }
}

export default CheckMark
