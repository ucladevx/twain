import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Button from './components/Button'
import Login from './containers/Login'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Hello World</div>
        <Button>Confirm</Button>
        <Button primary>Primary</Button>
        <Button fillWidth>Fill</Button>
      </div>
    )
  }
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}
