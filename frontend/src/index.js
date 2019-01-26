import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const App = () => {
    return (
        <Router>
            <Route path='/' component={() => (<div>Hello World</div>)} />
        </Router>
    )
}

render(<App />, document.getElementById('mount'))
