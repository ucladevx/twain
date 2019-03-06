import * as React from 'react'
import styled from 'styled-components'

const TaskListWrapper = styled.div`
  padding: 1.25em;
  border-radius: 5px;
  border: solid #c4c4c4 1px;
`
interface TaskListProps {
  children: React.ReactNode
}

const TaskList: React.SFC = (props: TaskListProps) => {
  return (
    <div>
      <TaskListWrapper>{props.children}</TaskListWrapper>
    </div>
  )
}

export default TaskList
