import * as React from 'react'
import styled from 'styled-components'
import { Header, Paragraph } from './Typography'
import Task from './Task'
import Button from './Button'
import ForwardButton from './ForwardButton'
import { ViewWrapper, ViewHeader, ViewBody, ViewFooter } from './View'

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
          <Header>Tasks</Header>
          <ForwardButton onClick={this.collapseSidebar} />
        </ViewHeader>
        <ViewBody>
          {this.renderTasks()} {this.renderNewTaskButton()}
        </ViewBody>
        <ViewFooter>
          <Button primary>Schedule</Button>
        </ViewFooter>
      </ViewWrapper>
    )
  }
}
