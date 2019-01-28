import * as React from 'react'
import styled from 'styled-components'

/* example styled-components usage w/ sass and props */
const FakeButtonWrapper = styled.div`
  color: ${props => props.color};

  &:hover {
    color: pink;
    cursor: pointer;
  }
`

/* example typescript usage: prop definition */
export interface FakeButtonProps {
  text: string
  color: string
}

export default class FakeButton extends React.Component<FakeButtonProps, {}> {
  render() {
    return (
      <FakeButtonWrapper color={this.props.color}>
        {this.props.text}
      </FakeButtonWrapper>
    )
  }
}
