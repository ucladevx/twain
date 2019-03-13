import * as React from 'react'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Config from '../../config'
import { onAuthSuccess, onAuthFailure } from '../../store/auth/actions'
import Button from '../../components/Button'

const GoogleSignInIcon = styled.div`
  padding-right: 10px;
  background: url('../public/g-logo.png') transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  background-size: contain;
  width: 24px;
  height: 20px;
`

interface Props {
  onAuthSuccess: (idToken: string, authCode: string) => Promise<{}>
  onAuthFailure: (error: string) => void
}

interface State {
  redirect: boolean
}

class GoogleSignInButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      redirect: false,
    }
  }

  onSuccessHandler = (response: any): void => {
    this.props
      .onAuthSuccess(response.tokenObj.id_token, response.tokenObj.access_token)
      .then(() => this.setState({ redirect: true }))
  }

  onFailureHandler = (response: any): void => {
    this.props.onAuthFailure(response.error)
  }

  render() {
    if (this.state.redirect) return <Redirect to="/main" />

    return (
      <GoogleLogin
        render={renderProps => (
          <Button onClick={renderProps.onClick}>
            <GoogleSignInIcon />
            Sign In With Google
          </Button>
        )}
        clientId={Config.CLIENT_ID}
        onSuccess={this.onSuccessHandler}
        onFailure={this.onFailureHandler}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuthSuccess: (idToken: string, authCode: string) =>
      dispatch(onAuthSuccess(idToken, authCode)),
    onAuthFailure: (error: string) => dispatch(onAuthFailure(error)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(GoogleSignInButton)
