import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { displayMeetups } from '../../actions/index';
import { Home } from '../../components/Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { User } from '../User/User';

export const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/user" component={User} />
    </Switch>
  );
}

ContentRoute.propTypes = {
  meetups: PropTypes.array,
  displayMeetups: PropTypes.func
};

export const mapStateToProps = ({meetups}) => ({
  meetups
});

export const mapDispatchToProps = (dispatch) => ({
  displayMeetups: (meetups) => dispatch(displayMeetups(meetups))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentRoute));