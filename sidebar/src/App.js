import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";

import Main from "./containers/Main";
import NewTask from "./containers/NewTask";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.state = { page: "Main" };
  }

  //switches from Main to NewTask and vice versa
  changePage() {
    if (this.state.page == "Main")
      this.setState({
        page: "NewTask"
      });
    else
      this.setState({
        page: "Main"
      });
  }

  render() {
    let page = null;
    if (this.state.page == "Main") {
      page = (
        <div id="App">
          <Main changePage={this.changePage} />
        </div>
      );
    } else {
      page = (
        <div id="App">
          <NewTask changePage={this.changePage} />
        </div>
      );
    }
    return page;
  }
}

export default App;
