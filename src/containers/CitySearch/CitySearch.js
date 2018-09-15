import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { PropTypes } from 'prop-types';
import MeetupsCont from '../MeetupsCont/MeetupsCont';
import { fetchPopularMeetups } from '../../Utilities/fetchData';
import { displayMeetups } from '../../actions';
import './CitySearch.css'

export class CitySearch extends Component {
  constructor () {
    super();
    this.state = {
      city: '',
      state: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    const { displayMeetups } = this.props;
    e.preventDefault();
    const { city, state } = this.state;
    const meetups = await fetchPopularMeetups(city, state);

    displayMeetups(meetups);
    this.setState({
      city: '',
      state: ''
    })
  }

  render() {
    const { city, state } = this.state;
    const { meetups } = this.props;

    return (
      <div className="city-search">
        <h1>Welcome to Meetup Matcher</h1>
        <h3>Enter your destination to find meetups.</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            className="search city-input"
            type="text"
            name="city"
            value={city}
            placeholder="Enter city"
            onChange={this.handleChange}
          />
          <input 
            className="search state-input"
            type="text"
            name="state"
            value={state}
            placeholder="Enter state"
            onChange={this.handleChange}
          />
          <button>SEARCH</button>
        </form>
        {meetups && <MeetupsCont />}
      </div>
    );
  }
}

CitySearch.propTypes = {
  displayMeetups: PropTypes.func,
  meetups: PropTypes.array
};

export const mapStateToProps = (state) => ({
  meetups: state.meetups
});

export const mapDispatchToProps = (dispatch) => ({
  displayMeetups: (meetups) => dispatch(displayMeetups(meetups))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CitySearch));

