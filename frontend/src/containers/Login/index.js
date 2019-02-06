import React from 'react'
import styled from 'styled-components'
// import ReactDOM from 'react-dom'
import { GoogleLogin } from 'react-google-login'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 20px;
  margin: 20px;
  font-family: Karla;
  font-style: normal;
  line-height: normal;
`

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

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0
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

  // onSignIn(googleUser) {
  //   Useful data for your client-side scripts:
  //   const profile = googleUser.getBasicProfile()
  //   console.log('ID: ' + profile.getId()) // Don't send this directly to your server!
  //   console.log('Full Name: ' + profile.getName())
  //   console.log('Given Name: ' + profile.getGivenName())
  //   console.log('Family Name: ' + profile.getFamilyName())
  //   console.log('Image URL: ' + profile.getImageUrl())
  //   console.log('Email: ' + profile.getEmail())

  //   The ID token you need to pass to your backend:
  //   const { id_token } = googleUser.getAuthResponse()
  //   console.log('ID Token: ' + id_token)
  // }

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
      <Wrapper>
        <Title>
          <h1>Sandbox</h1>
        </Title>
        <Content>
          <GoogleLogin
            clientId="574982251056-km2laltubmenemsuka31uphh70km2oc0.apps.googleusercontent.com"
            render={renderProps => (
              <button onClick={renderProps.onClick}>
                This is my custom Google button
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
    )
  }
}

export default Login
