import React from 'react';
import PropTypes from 'prop-types';
import './Meetup.css';

export const Meetup = ({...meetup}) => {
  return (
    <article className="meetup">
      <h2>{meetup.name.name}</h2>
      {meetup.description}
      <a href={meetup.website}>website</a>
    </article>
  );
};

Meetup.propTypes = {
  meetup: PropTypes.object
};