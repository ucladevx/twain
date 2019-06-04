import * as React from 'react'
import styled from 'styled-components'
import { Paragraph } from './Typography'

const TaskWrapper = styled.div`
  margin-bottom: 1.25em;
  display: flex;
  flex-direction: row;

  &:hover {
    cursor: pointer;
  }
`

// const FakeCheckBox = styled.div`
//   height: 12px;
//   width: 12px;
//   border: solid 1px black;
// `

export default class Task extends React.Component {
  editTask = () => {
    const { id } = this.props
    this.props.editTask(id)
  }

  render() {
    return (
      <TaskWrapper onClick={this.editTask}>
        <Paragraph>{this.props.name}</Paragraph>
      </TaskWrapper>
    )
  }
}
