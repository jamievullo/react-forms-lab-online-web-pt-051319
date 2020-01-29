import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: " ",
      password: " "
    };
  }

  handleChangeEvent = (event) => {
    // sets state to inputted name in form to value
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitEvent = (event) => {
    event.preventDefault()
    //100% looked this up. Good for future reference
    //checks to see if there is inputted uname and pass?
    //not sure what the return is on the back?
    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChangeEvent} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChangeEvent} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
