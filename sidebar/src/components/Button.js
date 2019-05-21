import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.primary ? "black" : "white")};
  width: ${props => (props.fillWidth ? "100%" : "auto")};
  color: ${props => (props.primary ? "white" : "black")};
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
`;

export default Button;
