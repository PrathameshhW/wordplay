import React from "react";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeUsername(event) {
    this.setState({
      Username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
              />
              <input
                type="text"
                placeholder="Username"
                onChange={this.changeUsername}
                value={this.state.username}
              />
              <input
                type="text"
                placeholder="Enter email"
                onChange={this.changeEmail}
                value={this.state.email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
