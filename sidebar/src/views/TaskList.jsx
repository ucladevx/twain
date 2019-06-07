import * as React from 'react'
import styled from 'styled-components'
import { Header, Paragraph } from '../components/Typography'
import Task from '../components/Task'
import Button from '../components/Button'
import ForwardButton from '../components/ForwardButton'
import {
  ViewWrapper,
  ViewHeader,
  ViewBody,
  ViewFooter,
} from '../components/View'

// import { tasks } from '../fakeTasks.js'

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

  async componentDidMount() {
    // ///test code, delete later
    // let object = {
    //   name: 'Study for midterm',
    //   dueDate: '',
    //   duration: '',
    //   isActive: false,
    //   isRecurrent: false,
    // }
    // this.props.storeTask(object)
    // // //////////////
    const tasks = await this.props.getTasks()
    // console.log(this.props.getTasks)
    if (this.props.getTasks() === undefined) return
    else
      this.setState({
        tasks: tasks,
      })
  }

  collapseSidebar = () => {
    window.alert('collapse')
  }

  renderTasks = () => {
    if (this.state.tasks.length) {
      return this.state.tasks.map(t => {
        return <Task {...t} editTask={this.props.editTask} key={t.id} />
      })
    } else {
      return <Paragraph>You don't have any tasks. Add one now!</Paragraph>
    }
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
          <Button onClick={this.props.scheduleTasks} primary>
            Schedule
          </Button>
        </ViewFooter>
      </ViewWrapper>
    )
  }
}
