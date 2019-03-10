import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from './containers/Home'
import Login from './containers/Login'
import Main from './containers/Main'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </div>
  )
}
