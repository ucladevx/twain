import * as React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import TaskList from "../../components/TaskList";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Wrapper>
          <TaskList />
          <Button onClick={this.props.changePage} primary={true} />
        </Wrapper>
      </div>
    );
  }
}

export default Main;
