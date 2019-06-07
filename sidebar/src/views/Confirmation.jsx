import * as React from 'react'
import styled from 'styled-components'
import { Header, Subheader, Paragraph } from '../components/Typography'
import Button from '../components/Button'
import CheckBoxTask from '../components/CheckBoxTask'
import BackButton from '../components/BackButton'
import { schedule } from '../fakeSchedule.js'

import {
  ViewWrapper,
  ViewHeader,
  ViewBody,
  ViewFooter,
} from '../components/View'

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
      schedule: [],
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
      schedule: schedule,
    })
  }

  collapseSidebar = () => {
    window.alert('collapse')
  }

  // renderTasks = () => {
  //   return this.state.tasks.map(t => {
  //     return <CheckBoxTask {...t} editTask={this.props.editTask} key={t.id} />
  //   })
  // }

  renderTasks = () => {
    return this.state.schedule.map(s => {
      return (
        <div>
          <Subheader>{s.time}</Subheader>
          {s.tasks.map(t => {
            return (
              <CheckBoxTask {...t} editTask={this.props.editTask} key={t.id} />
            )
          })}
        </div>
      )
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
