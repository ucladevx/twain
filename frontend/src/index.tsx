import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FakeButton from './components/FakeButton'
import Login from './containers/Login'
import { Provider } from 'react-redux'


import App from './App'
import configureStore from './configureStore'

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
const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mount')
)
