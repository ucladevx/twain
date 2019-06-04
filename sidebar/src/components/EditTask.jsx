import * as React from 'react'
import styled from 'styled-components'
import { Header, Subheader, Paragraph } from './Typography'
import Button from './Button'
import { tasks } from '../fakeTasks.js'

const Input = styled.input`
  border: none;
  display: block;
  background-color: inherit;
  font-size: inherit;
  width: 90%;
  padding: 0;
  margin-bottom: 1.5em;
  margin-top: -0.5em;
  font-family: Cabin;

  &:focus {
    outline: none;
  }
`

const EditTaskWrapper = styled.div`
  position: relative;
  height: 100%;
`

const ViewHeader = styled.div`
  position: absolute;
  height: 3.125em;
  top: 0;
`

const ViewBody = styled.div`
  position: absolute;
  top: 3.125em;
  bottom: 3.125em;
  padding: 1.5em 0;
`

const ViewFooter = styled.div`
  position: absolute;
  height: 3.125em;
  bottom: 0;
`

export default class EditTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editedTask: {
        name: '',
        dueDate: '',
        duration: '',
        isActive: false,
        isRecurrent: false,
      },
    }
  }

  componentDidMount() {
    const matches = tasks.filter(t => t.id === this.props.tid)
    if (matches.length != 0) {
      const { name, dueDate, duration, isActive, isRecurrent } = matches[0]

      this.setState({
        editedTask: {
          name,
          dueDate,
          duration,
          isActive,
          isRecurrent,
        },
      })
    }
  }

  /** Value Change Functions */
  onNameChange = e => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        name: e.target.value,
      },
    })
  }

  onDurationChange = e => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        duration: e.target.value,
      },
    })
  }

  onDueDateChange = e => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        dueDate: e.target.value,
      },
    })
  }

  saveTask = () => {
    window.alert('Updating task!', this.state.editedTask)

    /* connect with Redux in the future */
  }

  render() {
    return (
      <EditTaskWrapper>
        <ViewHeader>
          <Button onClick={this.props.cancelEdit}>Back</Button>
        </ViewHeader>
        <ViewBody>
          <Header>
            <Input
              value={this.state.editedTask.name}
              placeholder="Add task name"
              onChange={this.onNameChange}
            />
          </Header>
          <Subheader>Duration</Subheader>
          <Paragraph>
            <Input
              value={this.state.editedTask.duration}
              placeholder="Add duration"
              onChange={this.onDurationChange}
            />
          </Paragraph>
          <Subheader>Due Date</Subheader>
          <Paragraph>
            <Input
              value={this.state.editedTask.dueDate}
              placeholder="Add due date"
              onChange={this.onDueDateChange}
            />
          </Paragraph>
        </ViewBody>
        <ViewFooter>
          <Button onClick={this.saveTask} primary>
            Save
          </Button>
        </ViewFooter>
      </EditTaskWrapper>
    )
  }
}
