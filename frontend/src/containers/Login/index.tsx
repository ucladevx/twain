/* eslint-disable */
import * as React from 'react'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux'
import Config from '../../config'
import Wrapper from '../../components/Wrapper'
import { Header } from '../../components/Typography'
import { onAuthSuccess, onAuthFailure } from '../../store/auth/actions'
import { Redirect } from 'react-router'

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

interface State {
  email: string
  password: string
  redirect: boolean
}

interface Props {
  onAuthSuccess: (id_token: string, auth_code: string) => Promise<{}>
  onAuthFailure: (error: string) => void
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirect: false,
    }
  }

  onSuccessHandler = (response: any): void => {
    this.props
      .onAuthSuccess(response.tokenId, response.accessToken)
      .then(() => this.setState({ redirect: true }))
  }

  onFailureHandler = (response: any): void => {
    this.props.onAuthFailure(response.error)
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
    if (this.state.redirect) return <Redirect to="/main" />
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
              scope="profile email https://www.googleapis.com/auth/calendar"
              onSuccess={this.onSuccessHandler}
              onFailure={this.onFailureHandler}
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuthSuccess: (id_token: string, auth_code: string) =>
      dispatch(onAuthSuccess(id_token, auth_code)),
    onAuthFailure: (error: string) => dispatch(onAuthFailure(error)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
