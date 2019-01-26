import * as React from 'react'
import * as ReactDOM from 'react-dom'

import FakeButton from './components/FakeButton'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>Hello World</div>
                <FakeButton text="hellloooooo"/>
            </div>
        )
    } 
}

ReactDOM.render(<App />, document.getElementById('mount'))
