import * as React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import { Header, Subheader } from "../../components/Typography";

const NewTaskWrapper = styled.div`
  display: grid;
  background-color: #c4c4c4;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(4, 1fr);
  font-family: Cabin;
  padding: 0 1.25em;
`;

const Input = styled.input`
  border: none;
  display: block;
  font-family: inherit;
  background-color: inherit;
  font-size: inherit;
  grid-column: 1 / span 4;
  padding: 0.5em;
  margin-bottom: 1.5em;
  margin-top: -0.5em;
`;

class NewTask extends React.Component {
  render() {
    return (
      <div className="NewTask">
        <Wrapper>
          <NewTaskWrapper>
            <Header className="Header">New Task</Header>
            <Subheader>Title</Subheader>
            <Input value="Add Title" />
            <Subheader>Duration</Subheader>
            <Input value="Add Duration" />
            <Subheader>Due Date</Subheader>
            <Input value="Add Due Date" />
            <Button onClick={this.props.changePage}>Cancel</Button>
          </NewTaskWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default NewTask;

//note: create NewTaskWrapper
