import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 20px;
  margin: 20px;
  font-family: Karla;
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
