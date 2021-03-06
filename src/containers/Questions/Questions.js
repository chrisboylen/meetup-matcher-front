import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addUserQuestions } from '../../actions';
import { updateQuestionsFirebase } from '../../firebase/firebase';
import Header from '../Header/Header';
import './Questions.css';

export class Questions extends Component {
  constructor () {
    super();
    this.state = {
      traveling: false,
      entrepreneur: false,
      softwareDevs: false,
      hiking: false,
      photography: false,
      diningout: false,
      realEstate: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const questions = this.state;
    const { addUserQuestions, history } = this.props;
    const { username, email, userId } = this.props.user;
    updateQuestionsFirebase(userId, username, email, questions);
    addUserQuestions(questions);
   
    history.push('/');
  }

  handleChange = (e) => {
    const { name } = e.target;

    this.setState({ [name]: !this.state[name] });
  }

  render() {
    const {
      traveling,
      entrepreneur,
      softwareDevs,
      hiking,
      photography,
      diningout,
      realEstate
    } = this.state;

    return (
      <div className="question-cont">
        <Header />
        <form 
          className="user-questions"
          onSubmit={this.handleSubmit}
        >
          <h2>Select your favorite meetup topics</h2>
          <label htmlFor="traveling">
            <input 
              type="checkbox" 
              name="traveling" 
              id="traveling"
              checked={traveling}
              value={traveling}
              onChange={this.handleChange}
            /> 
            Traveling
          </label>
          <label htmlFor="entrepreneur">
            <input 
              type="checkbox" 
              name="entrepreneur" 
              id="entrepreneur"
              checked={entrepreneur}
              value={entrepreneur}
              onChange={this.handleChange}
            /> 
            Entrepreneur
          </label>
          <label htmlFor="softwareDevs">
            <input 
              type="checkbox" 
              name="softwareDevs" 
              id="softwareDevs"
              checked={softwareDevs}
              value={softwareDevs}
              onChange={this.handleChange}
            /> 
            Software Developers
          </label>
          <label htmlFor="hiking">
            <input 
              type="checkbox" 
              name="hiking" 
              id="hiking"
              checked={hiking}
              value={hiking}
              onChange={this.handleChange}
            /> 
            Hiking
          </label>
          <label htmlFor="photography">
            <input 
              type="checkbox" 
              name="photography" 
              id="photography"
              checked={photography}
              value={photography}
              onChange={this.handleChange}
            /> 
            Photography
          </label>
          <label htmlFor="diningout">
            <input 
              type="checkbox" 
              name="diningout" 
              id="diningout"
              checked={diningout}
              value={diningout}
              onChange={this.handleChange}
            /> 
            Dining Out
          </label>
          <label htmlFor="realEstate">
            <input 
              type="checkbox" 
              name="realEstate" 
              id="realEstate"
              checked={realEstate}
              value={realEstate}
              onChange={this.handleChange}
            /> 
            Real Estate
          </label>
          <button className="question-btn">SAVE</button>
        </form>
      </div>
    );
  }
}

Questions.propTypes = {
  addUserQuestions: PropTypes.func,
  questions: PropTypes.array,
  user: PropTypes.object,
  history: PropTypes.object
};

export const mapStateToProps = (state) => ({ 
  questions: state.questions,
  user: state.user 
});

export const mapDispatchToProps = (dispatch) => ({
  addUserQuestions: (questions) => dispatch(addUserQuestions(questions))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));