import * as React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import TaskList from "../../components/TaskList";

class NewTask extends React.Component {
  render() {
    return (
      <div className="Main">
        <Wrapper>
          <TaskList />
        </Wrapper>
      </div>
    );
  }
}

export default NewTask;
