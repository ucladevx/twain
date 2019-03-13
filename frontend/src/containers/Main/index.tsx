import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'
import Card from '../../components/Card'
import { Header, Subheader, Paragraph } from '../../components/Typography'
import TaskList from '../../components/TaskLisk'
import Button from '../../components/Button'
import TaskCard from '../../components/TaskCard'

const Title = styled.div`
  text-align: center
  grid-row: 3
  grid-column: 6 / span 2
  place-items: center
`

const CalendarView = styled.div`
  display: grid;
  grid-column: 5 / 13;
  grid-row: 1 / 7;
  border: solid red;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(10, 1fr);
`

class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      numTasks: 0,
    }
  }

  addTask = () => {
    this.setState({
      numTasks: this.state.numTasks + 1,
    })
  }

  render() {
    const tasks = []
    for (let i = 0; i < this.state.numTasks; i += 1) tasks[i] = <TaskCard />
    return (
      <div>
        <Wrapper>
          <TaskList>
            <Header>Tasks</Header>
            {tasks}
            <Button onClick={this.addTask}>Add Task</Button>
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
