import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { auth, writeUserData } from '../../firebase/firebase';
import { createUserFirebase, updateUserFirebase } from '../../firebase/auth';
import { loginUser, userError } from '../../actions';

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      error: null
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const { login, history } = this.props;
    const newUser = {username, email};
    const userInfo = await createUserFirebase(email, password);
     await updateUserFirebase(username)

    if (!userInfo) {
      return userError('Email has already been taken.');
    }
    login(newUser);
    history.push('/user')
  }

  render() {
    const { username, email, password, error } = this.state;
    const isInvalid = username === '' || email === '' || password === '';

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
        <button disabled={isInvalid}>Submit</button>
        {error && <h4>{error.message}</h4>}
      </form>
    )
  }
};

Signup.propTypes = {
  signup: PropTypes.func,
  userError: PropTypes.func
}

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  userError: (message) => dispatch(userError(message)) 
});

export default withRouter(connect(null, mapDispatchToProps)(Signup));