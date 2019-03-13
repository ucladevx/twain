import * as React from 'react'
import Button from '../../components/Button'
import { Header } from '../../components/Typography'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header>Hello World</Header>
        <Button>Confirm</Button>
        <Button primary>Primary</Button>
        <Button fillWidth>Fill</Button>
      </div>
    )
  }
}

export default Home
