import React from 'react'
import { createGlobalStyle } from 'styled-components'

import View from './containers/View'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Cabin;
  }
  /* Place Holder CSS */
  ::-webkit-input-placeholder {
    color: #000;
    opacity: 0.25;
    -webkit-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  :-moz-placeholder {
    color: #000;
    opacity: 0.25;
    -moz-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  ::-moz-placeholder {
    color: #000;
    opacity: 0.25;
    -moz-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  :-ms-input-placeholder {
    color: #000;
    opacity: 0.25;
    -ms-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }

  /* Place Holder CSS for Focus */
  :hover::-webkit-input-placeholder {
    opacity: 0.5;
    -webkit-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  :hover:-moz-placeholder {
    opacity: 0.5;
    -moz-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  :hover::-moz-placeholder {
    opacity: 0.5;
    -moz-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  :hover:-ms-input-placeholder {
    opacity: 0.5;
    -ms-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }

  /* Place Holder CSS for Focus */
  :focus::-webkit-input-placeholder {
    opacity: 0;
    -webkit-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  :focus:-moz-placeholder {
    opacity: 0;
    -moz-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  :focus::-moz-placeholder {
    opacity: 0;
    -moz-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
  :focus:-ms-input-placeholder {
    opacity: 0;
    -ms-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out;
  }
`

function App() {
  return (
    <div id="App">
      <GlobalStyle />
      <View />
    </div>
  )
}

export default App
