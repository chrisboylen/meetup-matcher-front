import React from 'react';
import { PropTypes } from 'prop-types';
import { logOutFirebase } from '../../firebase/auth';
import { logoutUser } from '../../actions';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { Questions } from '../Questions/Questions';


export const User = ({ user, }) => {
  return(
    <div className="user">
      <Header />
      <Questions />
    </div>
  )
};

User.propTypes = {
  user: PropTypes.object
};

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);