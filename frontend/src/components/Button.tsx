import * as React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
  primary?: boolean
  danger?: boolean
}

const ButtonWrapper = styled.button`
  background: ${(props: StyledButtonProps) =>
    props.primary ? 'grey' : 'white'};
  color: ${(props: StyledButtonProps) => (props.primary ? 'white' : 'grey')};
  border-radius: 5px;
  height: 3.125 em;
  width: auto;
  font-family: Cabin, sans-serif;
  font-weight: bold;
  align-items: center;
`

export default class Button extends React.Component<StyledButtonProps, {}> {
  render() {
    return (
      <div>
        <ButtonWrapper>Normal</ButtonWrapper>
        <ButtonWrapper primary>Primary</ButtonWrapper>
      </div>
    )
  }
}
