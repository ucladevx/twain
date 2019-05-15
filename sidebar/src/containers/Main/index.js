import * as React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import TaskList from "../../components/TaskList";

const CalendarView = styled.div`
  display: grid;
  grid-column: 5 / 13;
  grid-row: 1 / 7;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(10, 1fr);
  padding: 1.25em;
`;

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <TaskList />
      </div>
    );
  }
}

export default Main;
