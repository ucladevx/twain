/* eslint-disable */
import * as React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { Header, Subheader, Paragraph } from './Typography'

const TaskCardWrapper = styled.div`
    padding: 0px 20px 20px 20px
    align-content: space-evenly;
    grid-column: 1 / span 4;
    grid-row: span 4
    
`

export interface TaskCardProps {
  name: string
  due_date: string
  is_active: boolean
  is_recurrent: boolean
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
        </Card>
      </TaskCardWrapper>
    )
  }
}
