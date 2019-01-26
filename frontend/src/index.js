import React from 'react'
import { render } from 'react-dom'

import FakeButton from './components/FakeButton'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>Hello World</div>
                <FakeButton/>
            </div>
        )
    } 
}

render(<App />, document.getElementById('mount'))
