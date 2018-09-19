import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions';
import './Header.css';
import { auth } from '../../firebase/firebase';
import { logOutFirebase } from '../../firebase/auth';

export class Header extends Component {
  constructor () {
    super();
  }

  handleLogout = async () => {
    const { logout, history } = this.props;
    await logOutFirebase();
    await logout();
    history.push('/');
  };

  render () {
    return (
      <header className="navbar">
        <Link 
          className="title-link"
          to="/">
          <h1 className="full-txt">Meetup Matcher</h1>
          <h1 className="short-txt">MM</h1>
        </Link>
        <div className="user-links">
          <Link
            className="form-link login"
            to="/login">
              Login
          </Link>
          <Link
            className="form-link signup"
            to="/signup">
              Signup
          </Link>
          { auth.currentUser ?
            <Link
              className="form-link logout"
              to="" 
              onClick={this.handleLogout}>
                Log Out
            </Link> : ''
          }      
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser())
});

export default withRouter(connect(null, mapDispatchToProps)(Header));