import * as React from 'react'
import styled from 'styled-components'

const TaskList = styled.div`
  display: grid;
  background-color: #c4c4c4;
  grid-column: 1 / 5;
  grid-row: 1 / 7;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(4, 1fr);
`

export default TaskList
