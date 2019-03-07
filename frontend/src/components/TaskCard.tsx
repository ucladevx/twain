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

export interface TaskCardProps {
  name: string
  dueDate: string
  isActive: boolean
  isRecurrent: boolean
  flags: string
  description: string
}

export default class TaskCard extends React.Component<TaskCardProps, {}> {
  render() {
    return (
      <TaskCardWrapper>
        <Card>
          <Paragraph>{this.props.name}</Paragraph> <br />
          <Subheader>Description</Subheader>
          <Paragraph>{this.props.description}</Paragraph>
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
