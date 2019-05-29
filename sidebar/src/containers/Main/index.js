import * as React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import TaskList from "../../components/TaskList";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Wrapper>
          <TaskList changePage={this.props.changePage} />
        </Wrapper>
      </div>
    );
  }
}

export default Main;
