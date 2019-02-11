import React from 'react'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'
import Wrapper from '../../components/Wrapper'

const Title = styled.div`
  text-align: center;
  grid-row: 2;
  grid-column: 6 / span 2;
  place-items: center;
`

const Content = styled.div`
  text-align: center;
  grid-row: 3;
  grid-column: 6 / span 2;
  place-items: center;
`

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  responseGoogle = response => {
    console.log(response)
  }

  onEmailChange = event => {
    this.setState({
      email: event.target.value,
    })
  }

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit = event => {
    console.log(
      JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    )
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title>
            <h1>Sandbox</h1>
          </Title>
          <Content>
            <GoogleLogin
              clientId="" // insert client ID
              render={renderProps => (
                <button onClick={renderProps.onClick}>
                  Login With Google (custom button incoming)
                </button>
              )}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
            <div className="Login">
              <form>
                Username:
                <br />
                <input
                  onChange={this.onEmailChange}
                  type="email"
                  name="email-address"
                />
                <br />
                Password:
                <br />
                <input
                  onChange={this.onPasswordChange}
                  type="password"
                  name="password"
                />
                <br />
                <button onClick={this.handleSubmit}>Submit</button>
              </form>
            </div>
          </Content>
        </Wrapper>
      </div>
    )
  }
}

export default Login
