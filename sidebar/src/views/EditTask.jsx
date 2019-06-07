import * as React from 'react'
import styled from 'styled-components'
import { Subheader } from '../components/Typography'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
// import { tasks } from '../fakeTasks.js'
import {
  ViewWrapper,
  ViewHeader,
  ViewBody,
  ViewFooter,
} from '../components/View'

const Input = styled.input`
  border: none;
  display: block;
  background-color: inherit;
  padding: 0;
  margin-bottom: 1.5em;
  font-family: Cabin;

  &:focus {
    outline: none;
  }
`

const ParagraphInput = styled(Input)`
  font-size: 1.25em;
`

const HeaderInput = styled(Input)`
  font-size: 1.5em;
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
        id: this.props.tid,
      },
    }
  }

  async componentDidMount() {
    console.log('this is props.tid: ', this.props.tid)
    let match = await this.props.getSingleTask(this.props.tid)
    // console.log('this is match in EditTask: ', match)
    if (match.length !== 0) {
      const { name, dueDate, duration, isActive, isRecurrent, id } = match[0]

      this.setState({
        editedTask: {
          name,
          dueDate,
          duration,
          isActive,
          isRecurrent,
          id,
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
    console.log('this is editedTask: ', this.state.editedTask)
    this.props.storeTask(this.state.editedTask)

    /* connect with Redux in the future */
  }

  render() {
    return (
      <ViewWrapper>
        <ViewHeader>
          <BackButton onClick={this.props.cancelEdit}>Back</BackButton>
        </ViewHeader>
        <ViewBody>
          <HeaderInput
            value={this.state.editedTask.name}
            placeholder="Add task name"
            onChange={this.onNameChange}
          />
          <Subheader>Duration</Subheader>
          <ParagraphInput
            value={this.state.editedTask.duration}
            placeholder="Add duration"
            onChange={this.onDurationChange}
          />
          <Subheader>Due Date</Subheader>
          <ParagraphInput
            value={this.state.editedTask.dueDate}
            placeholder="Add due date"
            onChange={this.onDueDateChange}
          />
        </ViewBody>
        <ViewFooter>
          <Button onClick={this.saveTask} primary>
            Save
          </Button>
        </ViewFooter>
      </ViewWrapper>
    )
  }
}