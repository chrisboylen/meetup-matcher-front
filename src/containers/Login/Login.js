import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { signInFirebase } from '../../firebase/auth';
import { getUserInfoFirebase } from '../../firebase/firebase';
import { userError, loginUser } from '../../actions';
import { auth } from '../../firebase/firebase';

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

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { history, login } = this.props;
    const { email, password } = this.state;
    await signInFirebase(email, password);
    const userInfo = await getUserInfoFirebase(auth.currentUser.uid)

    if (!userInfo) {
      return userError('Email and/or Password do not match.');
    }

    login(userInfo)
    history.push('/user')
  }

  render() {
    const { email, password } = this.state;

    return(
      <div className="login-cont">
        <form 
          className="login-form"
          onSubmit={this.handleLoginSubmit}
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
        <NavLink className="login-link" to='/signup'>
            Sign Up
        </NavLink>
      </div>
    )
  }
};

Login.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object,
  userError: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  userError: (message) => dispatch(userError(message))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));