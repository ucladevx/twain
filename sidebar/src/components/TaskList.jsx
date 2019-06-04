import * as React from 'react'
// import styled from 'styled-components'
import { Header } from './Typography'
import Task from './Task'
// import TaskCard from './TaskCard'
import Button from './Button'

import { tasks } from '../fakeTasks.js'

export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    this.setState({
      tasks: tasks,
    })
  }

  renderTasks = () => {
    return this.state.tasks.map(t => {
      return <Task {...t} editTask={this.props.editTask} key={t.id} />
    })
  }

  render() {
    return (
      <div>
        <Header className="Header">Tasks</Header>
        {this.renderTasks()}
        <Button onClick={this.props.newTask}>New Task</Button>
      </div>
    )
  }
}
