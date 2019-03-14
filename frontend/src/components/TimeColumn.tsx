import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import { Redirect } from 'react-router'

const TimeColumnWrapper = styled.div`
  display: grid;
  grid-row: 2 / span 11;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(44, 1fr);
  height: 100%;
`

const Divider = styled.hr`
  display: grid;
  width: 100%;
  background: #c4c4c4;
  height: 0.1em;
  grid-row: span 4;
  border: 0;
`

export default class TimeColumn extends React.Component {
  render() {
    return (
      <TimeColumnWrapper>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
      </TimeColumnWrapper>
    )
  }
}
