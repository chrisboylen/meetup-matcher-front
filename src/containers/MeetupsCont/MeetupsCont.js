import React, { Component } from 'react';
import { Meetup } from '../../components/Meetup/Meetup';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

export class MeetupsCont extends Component {
  render() {
    const { meetups } = this.props;
    const meetupList = meetups.map((meetup, i) => (
      <Meetup 
        {...meetup}
        key={meetup.name+i}
      />
    ));

    return (
      <section className="meetups-cont">
        {meetupList}
      </section>
    );
  }
}

MeetupsCont.propTypes = {
  meetups: PropTypes.array,
  dispatch: PropTypes.func
};

export const mapStateToProps = ({ meetups }) => ({ meetups });

export default connect(mapStateToProps, null)(MeetupsCont);