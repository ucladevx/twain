import * as React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
  primary?: boolean
  danger?: boolean
  fillWidth?: boolean
  children: React.ReactNode
}

const ButtonWrapper = styled.button`
  background: ${(props: StyledButtonProps) =>
    props.primary ? 'grey' : 'white'};
  width: ${(props: StyledButtonProps) => (props.fillWidth ? '100%' : 'auto')};
  color: ${(props: StyledButtonProps) => (props.primary ? 'white' : 'black')};
  border-radius: 5px;
  border: solid #c4c4c4 1px;
  height: 3.125em;
  padding: 0 0.5em;
  outline: none;
  font-family: Cabin, sans-serif;
  font-weight: bold;
  align-items: center;

  &:hover {
    cursor: pointer;
    border: solid black 1px;
  }
`

export default function Button(props: StyledButtonProps) {
  const { children, ...styledProps } = props
  return <ButtonWrapper {...styledProps}>{props.children}</ButtonWrapper>
}
