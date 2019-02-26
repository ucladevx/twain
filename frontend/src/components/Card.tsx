import * as React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  padding: 1.25em;
  border-radius: 5px;
  border: solid #c4c4c4 1px;
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
