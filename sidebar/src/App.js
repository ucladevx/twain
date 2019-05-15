import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";

import Main from "./containers/Main";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
