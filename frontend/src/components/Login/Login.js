import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    onUsernameChange = event => {
        this.setState({
            username: event.target.value
        });
    }

    onPasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = event => {
        console.log(JSON.stringify({
            username: this.state.username,
            password: this.state.password
        }));
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    Username:<br/>
                    <input onChange={this.onUsernameChange} type="text" name="username"/><br/>
                    Password:<br/>
                    <input onChange={this.onPasswordChange} type="password" name="password"/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    } 
}

export default Login;