import styled from 'styled-components'

interface StyledButtonProps {
  primary?: boolean
  danger?: boolean
  fillWidth?: boolean
}

const Button = styled.button`
  background: ${(props: StyledButtonProps) =>
    props.primary ? 'black' : 'white'};
  width: ${(props: StyledButtonProps) => (props.fillWidth ? '100%' : 'auto')};
  color: ${(props: StyledButtonProps) => (props.primary ? 'white' : 'black')};
  border-radius: 5px;
  border: solid #c4c4c4 1px;
  height: 3.125em;
  padding: 0 1em;
  outline: none;
  font-size: 1em;
  font-family: Cabin, sans-serif;
  font-weight: 400;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export default Button
