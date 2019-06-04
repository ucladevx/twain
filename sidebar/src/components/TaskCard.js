import * as React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Header, Subheader, Paragraph } from "./Typography";
import Button from "./Button";

const ExpandedTaskCardWrapper = styled.div`
  margin-bottom: 1.25em;
  align-content: space-evenly;
  grid-column: 1 / span 4;
  grid-row: span 4;
`;

const ButtonWrapper = styled.div`
  grid-column: span 3 / 2;
  display: flex
  justify-content: right;
`;

const Input = styled.input`
  border: none;
  display: block;
  font-family: inherit;
  background-color: inherit;
  font-size: inherit;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1.5em;
  margin-top: -0.5em;
`;

const CompactTaskCardWrapper = styled.div`
  margin-bottom: 1.25em;
  align-content: space-evenly;
  grid-column: 1 / span 4;
`;

export default class TaskCard extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      expanded: false,
      editedTask: {
        name: "Editable task name",
        dueDate: "",
        isActive: false,
        isRecurrent: false,
        flags: "",
        description: "Some description of the task"
      },
      uneditedTask: {
        name: "Editable task name",
        dueDate: "",
        isActive: false,
        isRecurrent: false,
        flags: "",
        description: "Some description of the task"
      }
    };
  }

  onNameChange = e => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        name: e.target.value
      }
    });
  };

  toggleTaskCard = () => {
    console.log("clicked");
    this.setState({
      expanded: !this.state.expanded
    });
    return this.state;
  };

  cancelTaskCard = () => {
    this.toggleTaskCard();
    this.setState({
      editedTask: this.state.uneditedTask
    });
  };

  updateTaskCard = () => {
    this.setState({
      uneditedTask: this.state.editedTask
    });
    this.toggleTaskCard();

    /* connect with Redux in the future */
  };

  onDescriptionChange = e => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        description: e.target.value
      }
    });
  };

  render() {
    if (this.state.expanded) {
      return (
        <ExpandedTaskCardWrapper>
          <Card>
            <Paragraph>
              <Input
                value={this.state.editedTask.name}
                onChange={this.onNameChange}
              />
            </Paragraph>
            <Subheader>Description</Subheader>
            <Paragraph>
              <Input
                value={this.state.editedTask.description}
                onChange={this.onDescriptionChange}
              />
            </Paragraph>
            <Subheader>Label</Subheader>
            <Button fillWidth primary /> <br />
            <ButtonWrapper>
              <Button onClick={this.cancelTaskCard}>Cancel</Button>
              <Button onClick={this.updateTaskCard} primary>
                Submit
              </Button>
            </ButtonWrapper>
          </Card>
        </ExpandedTaskCardWrapper>
      );
    }
    return (
      <CompactTaskCardWrapper onClick={this.toggleTaskCard}>
        <Card>{this.state.editedTask.name}</Card>
      </CompactTaskCardWrapper>
    );
  }
}
