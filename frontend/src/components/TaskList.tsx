import * as React from 'react'
import styled from 'styled-components'
import { Header } from './Typography'
import Card from './Card'

const TaskItem = styled.div`
  padding: 0px 20px 20px 20px
  align-content: space-evenly;
  grid-column: 1 / span 4;
`

const TaskListWrapper = styled.div`
  display: grid;
  background-color: #c4c4c4;
  grid-column: 1 / 5;
  grid-row: 1 / 7;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(4, 1fr);
`

export default class TaskList extends React.Component {
  render() {
    return (
      <TaskListWrapper>
        <Header>Tasks</Header>
        <TaskItem>
          <Card>Task item1</Card>
        </TaskItem>
        <TaskItem>
          <Card>Task item2</Card>
        </TaskItem>
      </TaskListWrapper>
    )
  }
}
