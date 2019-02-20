import * as React from 'react'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'
import Wrapper from '../../components/Wrapper'
import Card from '../../components/Card'

const Title = styled.div`
  text-align: center;
  grid-row: 2;
  grid-column: 6 / span 2;
  place-items: center;
`

const Content = styled.div`
  text-align: center;
  grid-row: 4;
  grid-column: 6 / span 2;
  place-items: center;
`

const initialState = {
  email: '',
  password: '',
}

type State = Readonly<typeof initialState>

class Login extends React.Component<{}, State> {
  readonly state: State = initialState

  responseGoogle = (response: any): void => {
    console.log(response)
  }

  onEmailChange = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLInputElement
    this.setState({
      email: target.value,
    })
  }

  onPasswordChange = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLInputElement
    this.setState({
      password: target.value,
    })
  }

  handleSubmit = (event: React.SyntheticEvent): void => {
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
            <h1>Scheduler</h1>
          </Title>
          <Content>
            <GoogleLogin
              clientId="" /* insert client ID */
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
