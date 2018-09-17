import React from 'react';
import PropTypes from 'prop-types';
import './Meetup.css';

export const Meetup = ({...meetup}) => {
  return (
    <article className="meetup">
      <h2>{meetup.name.name}</h2>
      <h4>Who is this meetup for: <span>{meetup.who}</span></h4>
      <h4>Description: <span>{meetup.description}</span></h4>
      <a href={meetup.website}>website</a>
    </article>
  );
};

Meetup.propTypes = {
  meetup: PropTypes.object
};