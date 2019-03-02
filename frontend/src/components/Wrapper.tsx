import * as React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  min-height: 85vh
  grid-gap: 20px;
  margin: 20px;
  font-family: Cabin;
  font-style: normal;
  line-height: normal;
`

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.SFC = (props: WrapperProps) => {
  return (
    <div>
      <TextWrapper>{props.children}</TextWrapper>
    </div>
  )
}

export default Wrapper
