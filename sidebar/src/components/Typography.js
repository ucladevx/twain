import styled from "styled-components";

export const Header = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  font-family: Cabin;
  margin: 0.8125em 0;
`;

export const Subheader = styled.div`
  font-size: 1.25em;
  font-weight: 700;
  font-family: Cabin;
  margin: 0.75em 0;
`;

export const Paragraph = styled.p`
  font-size: 1.25em;
  font-weight: 400;
  font-family: Cabin;
  margin: 0.75em 0;
  line-height: ${props => (props.paragraph ? "1.5" : "1")};
`;
