import * as React from 'react'
import Button from '../../components/Button'

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

export default Home
