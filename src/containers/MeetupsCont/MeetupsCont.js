import React, { Component } from 'react';
import { Meetup } from '../../components/Meetup/Meetup';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { displayMeetups } from '../../actions';


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
  meetups: PropTypes.array
};

export const mapStateToProps = (state) => ({
  meetups: state.meetups
});

export const mapDispatchToProps = (dispatch) => ({
  displayMeetups: (meetups) => dispatch(displayMeetups(meetups))
});

export default connect(mapStateToProps, mapDispatchToProps)(MeetupsCont);