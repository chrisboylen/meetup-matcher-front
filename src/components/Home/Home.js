import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CitySearch from '../../containers/CitySearch/CitySearch';
import './Home.css';

export const Home = () => {
  return (
    <article className="home-cont">
      <header className="navbar">
        <h1>Meetup Matcher</h1>
        <NavLink 
          className="form-link login" 
          to="/login">Login
        </NavLink>
        <NavLink 
          className="form-link signup" 
          to="/signup">Signup
        </NavLink>
      </header>
      <CitySearch />
    </article>
  );
};

export default withRouter(Home);