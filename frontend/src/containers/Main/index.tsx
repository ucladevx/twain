import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'
import Card from '../../components/Card'
import { Header, Subheader, Paragraph } from '../../components/Typography'
import Button from '../../components/Button'
import TaskCard from '../../components/TaskCard'

const Title = styled.div`
  text-align: center
  grid-row: 3
  grid-column: 6 / span 2
  place-items: center
`

const TaskList = styled.div`
  display: grid;
  background-color: #c4c4c4;
  grid-column: 1 / 5;
  grid-row: 1 / 7;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(4, 1fr);
`

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
            <TaskCard />
            <TaskItem>
              <Card>Task item1</Card>
            </TaskItem>
          </TaskList>
          <CalendarView>
            <Header>Calendar</Header>
          </CalendarView>
        </Wrapper>
      </div>
    )
  }
}

export default Main
