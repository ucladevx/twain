import * as React from 'react'
import styled from 'styled-components'
import TimeColumn from './TimeColumn'
import { Header, Subheader, Paragraph } from './Typography'

const CalendarDayWrapper = styled.div`
  display: grid;
  background-color: #c4c4c4;
  grid-column: 2 / span 3;
  grid-row: 1 / span 12;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: 1fr;
`

export interface CalendarDayProps {
  date: string
}

export default class CalendarDay extends React.Component<CalendarDayProps, {}> {
  render() {
    return (
      <CalendarDayWrapper>
        <Header>{this.props.date}</Header>
        <TimeColumn> </TimeColumn>
      </CalendarDayWrapper>
    )
  }
}
