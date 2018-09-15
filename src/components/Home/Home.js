import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CitySearch from '../../containers/CitySearch/CitySearch';
import Header from '../../containers/Header/Header';
import './Home.css';


export const Home = () => {
  return (
    <article className="home-cont">
      <Header />
      <CitySearch />
    </article>
  );
};

export default withRouter(Home);