import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'
import Card from '../../components/Card'
import { Header, Subheader, Paragraph } from '../../components/Typography'

const Title = styled.div`
  text-align: center;
  grid-row: 3;
  grid-column: 6 / span 2;
  place-items: center;
`

const TaskList = styled.div`
  display: grid
  background-color: #c4c4c4;
  grid-column: 1 / 5
  grid-row: 1 / 7
  grid-gap: 20px;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(4, 1fr)
`

const TaskItem = styled.div``

const CalendarView = styled.div`
display: grid
  grid-column: 5 / 13
  grid-row: 1 / 7
  border: solid red
  grid-gap: 20px;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(10, 1fr)
`

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Wrapper>
          <TaskList>
            <TaskItem>Task list</TaskItem>
          </TaskList>
          <CalendarView>Calendar</CalendarView>
        </Wrapper>
      </div>
    )
  }
}

export default Main
