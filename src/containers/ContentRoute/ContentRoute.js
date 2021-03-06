import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Home } from '../../components/Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import User from '../User/User';
import Questions from '../Questions/Questions';

export const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/user" component={User} />
      <Route exact path="/user/questions" component={Questions} />
    </Switch>
  );
};

export default withRouter(ContentRoute);