import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'
import { Header, Subheader, Paragraph } from '../../components/Typography'
import TaskList from '../../components/TaskList'
import CalendarDay from '../../components/CalendarDay'
import TimeLabel from '../../components/TimeLabel'

const CalendarView = styled.div`
  display: grid;
  grid-column: 5 / 13;
  grid-row: 1 / 7;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(10, 1fr);
  padding: 1.25em;
`

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Wrapper>
          <TaskList />
          <CalendarView>
            <TimeLabel />
            <CalendarDay date="March 14" />
            <CalendarDay date="March 15" />
            <CalendarDay date="March 16" />
          </CalendarView>
        </Wrapper>
      </div>
    )
  }
}

export default Main
