import * as React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import { Header } from "../../components/Typography";

const NewTaskWrapper = styled.div`
  display: grid;
  background-color: #c4c4c4;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(4, 1fr);
  font-family: Cabin;
  padding: 0 1.25em;
`;

class NewTask extends React.Component {
  render() {
    return (
      <div className="NewTask">
        <Wrapper>
          <NewTaskWrapper>
            <Header className="Header">New Task</Header>
            <Button onClick={this.props.changePage}>Cancel</Button>
          </NewTaskWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default NewTask;

//note: create NewTaskWrapper
