import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'
import Card from '../../components/Card'
import { Header, Subheader, Paragraph } from '../../components/Typography'
import TaskList from '../../components/TaskLisk'
import CalendarDay from '../../components/CalendarDay'
import TimeLabel from '../../components/TimeLabel'

const TaskItem = styled.div`
  padding: 0px 20px 20px 20px
  align-content: space-evenly;
  grid-column: 1 / span 4;
`

const CalendarView = styled.div`
  display: grid
  grid-column: 5 / 13
  grid-row: 1 / 7
  border: solid red
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(10, 1fr)
`

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Wrapper>
          <TaskList>
            <Header>Tasks</Header>
            <TaskItem>
              <Card>Task item1</Card>
            </TaskItem>
            <TaskItem>
              <Card>Task item2</Card>
            </TaskItem>
          </TaskList>
          <CalendarView>
            <TimeLabel />
            <CalendarDay date="March 1" />
            <CalendarDay date="March 2" />
            <CalendarDay date="March 3" />
          </CalendarView>
        </Wrapper>
      </div>
    )
  }
}

export default Main
