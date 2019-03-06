import * as React from 'react'
import styled from 'styled-components'
import Card from './Card'

export interface TaskCardProps {
  children: React.ReactNode
  name: string
  due_date: string
  is_active: boolean
  is_recurrent: boolean
  flags: string
  description: string
}

const TaskCard: React.SFC = (props: TaskCardProps) => {
  return (
    <div>
      <Card>{props.children}</Card>
    </div>
  )
}

export default Card
