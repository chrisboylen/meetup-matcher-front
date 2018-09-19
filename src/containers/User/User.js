import React from 'react';
import { PropTypes } from 'prop-types';
import { logoutUser } from '../../actions';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import CitySearch from '../CitySearch/CitySearch';

export const User = ({ user, history }) => {
  return (
    <div className="user">
      <Header />
      { !user.questions ?
        history.push('/user/questions'):
        <CitySearch />  }
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func,
  history: PropTypes.object
};

export const mapStateToProps = ({ user, questions }) => ({ user, questions });

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);