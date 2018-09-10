import React, { Component } from 'react';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
  }

  render() {
    const { username, email, password } = this.state;

    return(
      <form 
        className="signup-form"
        onSubmit={this.handleSubmit}
      >
        <input 
          className="username-input-signup"
          required
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleChange}
        />
        <input 
          className="email-input-signup"
          required
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input 
          className="password-input-signup"
          required
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
};