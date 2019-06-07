import styled from 'styled-components'

const styleBackground = props => {
  if (props.primary) {
    return 'black'
  } else if (props.text) {
    return 'none'
  } else {
    return 'white'
  }
}

const Button = styled.button`
  background: ${props => styleBackground(props)};
  width: ${props => (props.fillWidth ? '100%' : 'auto')};
  color: ${props => (props.primary ? 'white' : 'black')};
  border: none;
  height: 100%;
  padding: 0 1.25em;
  outline: none;
  font-size: 1.25em;
  font-weight: 400;
  font-family: Cabin;
  align-items: center;
  text-decoration: ${props => (props.text ? 'underline' : 'none')}

  &:hover {
    cursor: pointer;
  }
`

export default Button
