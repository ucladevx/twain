import styled from 'styled-components'

export const Header = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
`

export const Subheader = styled.div`
  font-size: 1.25em;
  font-weight: 300;
  margin: 0.75em 0;
  padding: 0.5em 0;
`

export const Paragraph = styled.p`
  font-size: 1.25em;
  font-weight: 400;
  margin: 0.75em 0;
  line-height: ${props => (props.paragraph ? '1.5' : '1')};
`
