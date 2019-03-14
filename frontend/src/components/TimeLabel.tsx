import * as React from 'react'
import styled, { withTheme } from 'styled-components'

const TimeLabelWrapper = styled.div`
  display: grid;
  grid-column: 1 / span 1;
  grid-row: 2 / span 11;
  grid-template-rows: repeat(44, 1fr);
  grid-template-columns: 1fr;
`

const Label = styled.div`
  display: grid;
  grid-row: span 4;
  text-align: center;
  font-size: 1em;
  font-weight: 200;
  font-family: Cabin;
  margin-top: 0em;
`

export default class TimeLabel extends React.Component {
  render() {
    return (
      <TimeLabelWrapper>
        <Label> 8 am </Label>
        <Label> 9 am </Label>
        <Label> 10 am </Label>
        <Label> 11 am </Label>
        <Label> 12 am </Label>
        <Label> 1 pm </Label>
        <Label> 2 pm </Label>
        <Label> 3 pm </Label>
        <Label> 4 pm </Label>
        <Label> 5 pm </Label>
        <Label> 6 pm </Label>
      </TimeLabelWrapper>
    )
  }
}
