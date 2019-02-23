import * as React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
  primary?: boolean
  danger?: boolean
  fillWidth?: boolean
}

const ButtonWrapper = styled.button`
  background: ${(props: StyledButtonProps) =>
    props.primary ? 'grey' : 'white'};
  width: ${(props: StyledButtonProps) => (props.fillWidth ? '100%' : 'auto')};
  color: ${(props: StyledButtonProps) => (props.primary ? 'white' : 'grey')};
  border-radius: 5px;
  border: solid #c4c4c4 1px;
  height: 3.125em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  outline: none;
  font-family: Cabin, sans-serif;
  font-weight: bold;
  align-items: center;

  &:hover {
    cursor: pointer;
    border: solid #c4c4c4 2px;
    margin: -1px;
  }
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
