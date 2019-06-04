import * as React from 'react'
import styled from 'styled-components'
import TaskList from '../../components/TaskList'
import EditTask from '../../components/EditTask'

const views = {
  List: 'List',
  NewTask: 'NewTask',
  EditTask: 'EditTask',
  Confirmation: 'Confirmation',
}

const ViewWrapper = styled.div`
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

  cancelEdit = () => {
    this.setState({
      view: views.List,
      activeTask: null,
    })
  }

  renderView() {
    switch (this.state.view) {
      case views.List:
        return <TaskList editTask={this.editTask} newTask={this.newTask} />
      case views.NewTask:
      case views.EditTask:
        return (
          <EditTask tid={this.state.activeTask} cancelEdit={this.cancelEdit} />
        )
      default:
        return <TaskList editTask={this.viewEditTask} />
    }
  }

  render() {
    return <ViewWrapper>{this.renderView()}</ViewWrapper>
  }
}

export default View
