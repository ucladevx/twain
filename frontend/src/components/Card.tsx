import * as React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  padding: 1.25em;
  border-radius: 5px;
  border: solid #e1e1e1 1px;
  background-color: #e1e1e1;

  &:hover {
    cursor: pointer;
  }
`

interface CardProps {
  children: React.ReactNode
}

const Card: React.SFC = (props: CardProps) => {
  return (
    <div>
      <CardWrapper>{props.children}</CardWrapper>
    </div>
  )
}

export default Card
