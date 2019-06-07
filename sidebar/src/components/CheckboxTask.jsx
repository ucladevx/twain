import * as React from 'react'
import styled from 'styled-components'
import { Paragraph } from './Typography'

const CheckBoxTaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5em 0;

  &:hover {
    cursor: pointer;
  }
`

const CheckBox = styled.div`
  height: 12px;
  width: 12px;
  border: solid 1px black;
  float: left;
  margin: 0.85em 0.3em;
  display: inline;
`

export const FinishedTask = styled.p`
  font-size: 1.25em;
  font-weight: 400;
  margin: 0.75em 0;
  line-height: ${props => (props.paragraph ? '1.5' : '1')};
  text-decoration: line-through;
`

export default class CheckBoxTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: this.props.completed,
    }
  }

  editTask = () => {
    const { id } = this.props
    this.props.editTask(id)
  }

  toggleCompleted = () => {
    this.setState({
      completed: !this.state.completed,
    })
  }

  render() {
    if (this.state.completed) {
      return (
        <CheckBoxTaskWrapper>
          <CheckBox onClick={this.toggleCompleted} />
          <FinishedTask onClick={this.editTask}>{this.props.name}</FinishedTask>
        </CheckBoxTaskWrapper>
      )
    } else {
      return (
        <CheckBoxTaskWrapper>
          <CheckBox onClick={this.toggleCompleted} />
          <Paragraph onClick={this.editTask}>{this.props.name}</Paragraph>
        </CheckBoxTaskWrapper>
      )
    }
  }
}
