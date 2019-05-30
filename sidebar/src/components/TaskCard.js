import * as React from "react";
import styled from "styled-components";
import { Header, Subheader, Paragraph } from "./Typography";
import Button from "./Button";

const Card = styled.div`
  font-family: Cabin;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const CompactTaskCardWrapper = styled.div`
  margin-bottom: 1.25em;
  align-content: space-evenly;
  grid-column: 1 / span 4;
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
  width: 90%;
  padding: 0.5em;
  margin-bottom: 1.5em;
  margin-top: -0.5em;
`;

const EditTaskWrapper = styled.div`
  font-family: Cabin;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  align-content: space-evenly;
  grid-column: 1 / span 4;
  grid-row: 2 / span 4;
`;

export default class TaskCard extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      expanded: false,
      editedTask: {
        name: props.name,
        duration: props.duration,
        dueDate: props.dueDate,
        isActive: props.isActive,
        isRecurrent: props.isRecurrent
      }
    };
  }

  /** Value Change Functions */
  onNameChange = e => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        name: e.target.value
      }
    });
  };

  onDurationChange = e => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        duration: e.target.value
      }
    });
  };

  onDueDateChange = e => {
    this.setState({
      editedTask: {
        ...this.state.editedTask,
        dueDate: e.target.value
      }
    });
  };

  /** Toggle Functions */
  toggleTaskCard = () => {
    console.log("clicked");
    this.setState({
      expanded: !this.state.expanded
    });
    return this.state;
  };

  cancelTaskCard = () => {
    this.setState({
      editedTask: {
        name: this.props.name,
        description: this.props.description
      }
    });
    this.toggleTaskCard();
  };

  updateTaskCard = () => {
    this.setState({
      editedTask: this.state.editedTask
    });
    this.toggleTaskCard();

    /* connect with Redux in the future */
  };

  render() {
    if (this.state.expanded) {
      return (
        <EditTaskWrapper>
          <Button className="button icon-left" onClick={this.toggleTaskCard}>
            Back
          </Button>{" "}
          <Header>
            <Input
              value={this.state.editedTask.name}
              onChange={this.onNameChange}
            />
          </Header>
          <Subheader>Duration</Subheader>
          <Paragraph>
            <Input
              value={this.state.editedTask.duration}
              onChange={this.onDurationChange}
            />
          </Paragraph>
          <Subheader>Due Date</Subheader>
          <Paragraph>
            <Input
              value={this.state.editedTask.dueDate}
              onChange={this.onDueDateChange}
            />
          </Paragraph>
          <ButtonWrapper>
            <Button onClick={this.updateTaskCard} primary>
              Save
            </Button>
          </ButtonWrapper>
        </EditTaskWrapper>
      );
    }
    return (
      <CompactTaskCardWrapper onClick={this.toggleTaskCard}>
        <Card>{this.props.name}</Card>
      </CompactTaskCardWrapper>
    );
  }
}
