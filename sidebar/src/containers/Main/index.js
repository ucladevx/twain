import * as React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import TaskList from "../../components/TaskList";
const getFreeIntervals = require('../../lib/storage/free_intervals')
//import { schedule } from '../../lib/csp/schedule'

class Main extends React.Component {
  async componentDidMount() {
    var res = await getFreeIntervals();
    console.log(res);
  }

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

export default Main;