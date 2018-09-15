import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions';
import './Header.css';

export const Header = ({ logout, user }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="navbar">
      <h1>Meetup Matcher</h1>
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
      <Link
        className="form-link logout"
        to="/" replace>
          <button className="logout-btn" onClick={handleLogout} >
            Log Out
          </button>
      </Link>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func
};

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(Header);