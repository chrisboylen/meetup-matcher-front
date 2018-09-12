import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { signInFirebase } from '../../firebase/auth';
import { userError, loginUser } from '../../actions';
import { auth } from '../../firebase/firebase';
import { cleanUserInfo } from '../../Utilities/helper';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
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
        <button>Submit</button>
      </form>
    )
  }
};
