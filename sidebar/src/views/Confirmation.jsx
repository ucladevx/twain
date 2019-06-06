import * as React from 'react'
import styled from 'styled-components'
import { Header, Subheader, Paragraph } from '../components/Typography'
import Task from '../components/Task'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import {
  ViewWrapper,
  ViewHeader,
  ViewBody,
  ViewFooter,
} from '../components/View'

import { tasks } from '../fakeTasks.js'

const ButtonWrapper = styled.div`
  display: block;
  border-top: solid 0.5px #000;
  padding: 0.5em 0;

  &:hover {
    cursor: pointer;
  }

  color: #000;
  opacity: 0.25;
`

export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }

  renderNewTaskButton = () => {
    return (
      <ButtonWrapper onClick={this.props.newTask}>
        <Paragraph>&#65291; New Task</Paragraph>
      </ButtonWrapper>
    )
  }

  componentDidMount() {
    this.setState({
      tasks: tasks,
    })
  }

  collapseSidebar = () => {
    window.alert('collapse')
  }

  renderTasks = () => {
    return this.state.tasks.map(t => {
      return <Task {...t} editTask={this.props.editTask} key={t.id} />
    })
  }

  render() {
    return (
      <ViewWrapper>
        <ViewHeader>
          <BackButton onClick={this.props.cancelSchedule} />
        </ViewHeader>
        <ViewBody>
          <Header>Today</Header>
          <Subheader>12:00-1:00</Subheader>
          {this.renderTasks()}
        </ViewBody>
        <ViewFooter>
          <Button text>Schedule</Button>
          <Button primary>Confirm</Button>
        </ViewFooter>
      </ViewWrapper>
    )
  }
}
