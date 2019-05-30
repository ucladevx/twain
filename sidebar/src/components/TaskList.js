import * as React from "react";
import styled from "styled-components";
import { Header } from "./Typography";
import TaskCard from "./TaskCard";

const TaskListWrapper = styled.div`
  display: grid;
  background-color: #e8e8e8;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(4, 1fr);
  font-family: Cabin;
  padding: 0 1.25em;
`;

export default class TaskList extends React.Component {
  render() {
    return (
      <TaskListWrapper className="TaskListWrapper">
        <Header className="Header">Tasks</Header>
        <TaskCard
          className="TaskCard"
          name="Go grocery shopping"
          dueDate="March 14"
          duration="30 minutes"
          isActive={true}
          isRecurrent={false}
        />
      </TaskListWrapper>
    );
  }
}
