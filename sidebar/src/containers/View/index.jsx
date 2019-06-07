import * as React from 'react'
import styled from 'styled-components'
import TaskList from '../../views/TaskList'
import EditTask from '../../views/EditTask'
import Confirmation from '../../views/Confirmation'
import { storeTask, getTasks, getSingleTask } from '../../lib/storage'

const views = {
  List: 'List',
  NewTask: 'NewTask',
  EditTask: 'EditTask',
  Confirmation: 'Confirmation',
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
`

class View extends React.Component {
  constructor() {
    super()
    this.state = {
      view: views.List,
      activeTask: null,
    }
  }

  // TODO: add logic to grab tasks from chrome.storage
  // componentDidMount() {

  // }

  newTask = () => {
    this.setState({
      view: views.EditTask,
      activeTask: Math.random(),
    })
  }

  editTask = tid => {
    this.setState({
      view: views.EditTask,
      activeTask: tid,
    })
  }

  backView = () => {
    this.setState(state => {
      let newView
      switch (state.view) {
        case views.EditTask:
        case views.NewTask:
        case views.Confirmation:
          newView = views.List
          break
        default:
          newView = views.List
      }
      return {
        view: newView,
      }
    })
  }

  scheduleTasks = () => {
    console.log('hello')
    this.setState({
      view: views.Confirmation,
    })
  }

  cancelEdit = () => {
    this.setState({
      view: views.List,
      activeTask: null,
    })
  }

  cancelSchedule = () => {
    this.setState({
      view: views.List,
      activeTask: null,
    })
  }

  renderView() {
    switch (this.state.view) {
      case views.List:
        return (
          <TaskList
            getTasks={getTasks}
            storeTask={storeTask} //get rid of this
            editTask={this.editTask}
            newTask={this.newTask}
            scheduleTasks={this.scheduleTasks}
          />
        )
      case views.NewTask:
      case views.EditTask:
        return (
          <EditTask
            storeTask={storeTask}
            getTasks={getTasks}
            getSingleTask={getSingleTask}
            tid={this.state.activeTask}
            cancelEdit={this.backView}
          />
        )
      case views.Confirmation:
        return <Confirmation cancelSchedule={this.backView} />
      default:
        return null
    }
  }

  render() {
    return <Wrapper>{this.renderView()}</Wrapper>
  }
}

export default View
