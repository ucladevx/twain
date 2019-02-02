import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FakeButton from './components/FakeButton'

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
      <Route path="/" component={Home} />
    </Router>
  )
}

render(<App />, document.getElementById('mount'))
