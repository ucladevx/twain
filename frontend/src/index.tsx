import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FakeButton from './components/FakeButton'
import Login from './containers/Login'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Hello World</div>
        <FakeButton text="hellloooooo" color="peru" />
      </div>
    )
  }
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

render(<App />, document.getElementById('mount'))
