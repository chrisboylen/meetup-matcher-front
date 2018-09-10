import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { email, password } = this.state;

    return(
      <form 
        className="login-form"
        onSubmit={this.handleSubmit}
      >
        <input 
          className="email-input"
          required
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input 
          className="password-input"
          required
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <button></button>
      </form>
    )
  }
};
