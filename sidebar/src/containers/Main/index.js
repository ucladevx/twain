import * as React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import TaskList from "../../components/TaskList";
import { getTodaysFreeIntervals } from '../../lib/storage/free_intervals'
//import { schedule } from '../../lib/csp/schedule'

class Main extends React.Component {
  componentDidMount() {
    // try {
    var free_intervals = getTodaysFreeIntervals();
    // console.log(free_intervals);
    // }
    // catch (err) {
    // console.log(err);
    // }
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