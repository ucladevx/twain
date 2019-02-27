import * as React from 'react'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'
import Config from '../../config'
import Wrapper from '../../components/Wrapper'
import Card from '../../components/Card'
import { Header, Subheader, Paragraph } from '../../components/Typography'
import { onAuthFailure } from '../../store/auth/actions'

const Title = styled.div`
  text-align: center;
  grid-row: 2;
  grid-column: 6 / span 2;
  place-items: center;
`

const GoogleSignInButton = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: solid #c4c4c4 1px;
  &:hover {
    cursor: pointer;
    border: solid #c4c4c4 2px;
    margin: -1px;
  }
`

const GoogleSignInIcon = styled.div`
  padding-right: 10px;
  background: url('../public/g-logo.png') transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  background-size: contain;
  width: 24px;
  height: 20px;
`

const Content = styled.div`
  text-align: center;
  grid-row: 3;
  grid-column: 5 / span 4;
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

  onFailure = (response: any): void => {
    onAuthFailure(response.error)
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
            <Header>scheduler</Header>
          </Title>
          <Content>
            <GoogleLogin
              render={renderProps => (
                <GoogleSignInButton onClick={renderProps.onClick}>
                  <GoogleSignInIcon />
                  Login With Google
                </GoogleSignInButton>
              )}
              clientId={Config.CLIENT_ID}
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
