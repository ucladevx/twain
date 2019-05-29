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
    this.state = { page: <Main /> };
  }
  render() {
    return <div id="App">{this.state.page}</div>;
  }
}

export default App;
