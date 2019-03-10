import * as React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { Header, Subheader, Paragraph } from './Typography'
import Button from './Button'

const TaskCardWrapper = styled.div`
    padding: 0px 1.25em 1.25em 1.25em
    align-content: space-evenly;
    grid-column: 1 / span 4;
    grid-row: span 4
`

const ButtonWrapper = styled.div`
  grid-column: span 3 / 2;
  display: flex
  justify-content: right;
`

const Input = styled.input`
  border: none;
  display: block;
  font-family: inherit;
  background-color: inherit;
  font-size: inherit;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1.5em;
  margin-top: -0.5em;
`

export interface TaskCardState {
  editedTask: {
    name: string
    dueDate: string
    isActive: boolean
    isRecurrent: boolean
    flags: string
    description: string
  }
}

export interface TaskCardProps {
  name: string
  dueDate: string
  isActive: boolean
  isRecurrent: boolean
  flags: string
  description: string
}

export default class TaskCard extends React.Component<
  TaskCardProps,
  TaskCardState
> {
  constructor(props: TaskCardProps) {
    super(props)
    this.state = {
      editedTask: {
        name: 'Editable task name',
        dueDate: '',
        isActive: false,
        isRecurrent: false,
        flags: '',
        description: 'Some description of the task',
      },
    }
  }

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        name: e.target.value,
      },
    })
  }

  onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        description: e.target.value,
      },
    })
  }

  render() {
    return (
      <TaskCardWrapper>
        <Card>
          <Paragraph>
            <Input
              value={this.state.editedTask.name}
              onChange={this.onNameChange}
            />
          </Paragraph>
          <Subheader>Description</Subheader>
          <Paragraph>
            <Input
              value={this.state.editedTask.description}
              onChange={this.onDescriptionChange}
            />
          </Paragraph>
          <Subheader>Label</Subheader>
          <Button fillWidth primary /> <br />
          <ButtonWrapper>
            <Button>Cancel</Button>
            <Button primary>Submit</Button>
          </ButtonWrapper>
        </Card>
      </TaskCardWrapper>
    )
  }
}
