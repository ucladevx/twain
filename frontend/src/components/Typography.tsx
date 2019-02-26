import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0.8125em 0;
`

interface HeaderProps {
  children: React.ReactNode
}

const Header: React.SFC = (props: HeaderProps) => {
  return (
    <div>
      <HeaderWrapper>{props.children}</HeaderWrapper>
    </div>
  )
}

const SubheaderWrapper = styled.div`
  font-size: 1em;
  font-weight: 700;
  margin: 0.75em 0;
`

interface SubheaderProps {
  children: React.ReactNode
}

const Subheader: React.SFC = (props: SubheaderProps) => {
  return (
    <div>
      <SubheaderWrapper>{props.children}</SubheaderWrapper>
    </div>
  )
}

const ParagraphWrapper = styled.div`
  font-size: 1em;
  font-weight: 400;
  margin: 0.75em 0;
`

interface ParagraphProps {
  children: React.ReactNode
}

const Paragraph: React.SFC = (props: ParagraphProps) => {
  return (
    <div>
      <ParagraphWrapper>{props.children}</ParagraphWrapper>
    </div>
  )
}

export { Header, Subheader, Paragraph }
