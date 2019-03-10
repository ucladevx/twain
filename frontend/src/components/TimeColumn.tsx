import * as React from 'react'
import styled from 'styled-components'

const TimeColumnWrapper = styled.div`
  display: grid;
  grid-row: 2 / span 11;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(44, 1fr);
  height: 100%;
  background: black;
`

export default class TimeColumn extends React.Component {
  render() {
    return <TimeColumnWrapper />
  }
}
