import * as React from 'react'
import styled from 'styled-components'
import TimeColumn from './TimeColumn'
import { Header } from './Typography'

const CalendarDayWrapper = styled.div`
  display: grid;
  grid-column: span 3;
  grid-row: 1 / span 12;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: 1fr;

  &:not(:last-child) {
    border-right: solid 1px grey;
  }
`

const Date = styled.div`
  padding: 0 1.25em;
`

export interface CalendarDayProps {
  date: string
}

export default class CalendarDay extends React.Component<CalendarDayProps, {}> {
  render() {
    return (
      <CalendarDayWrapper>
        <Date>
          <Header>{this.props.date}</Header>
        </Date>
        <TimeColumn> </TimeColumn>
      </CalendarDayWrapper>
    )
  }
}
