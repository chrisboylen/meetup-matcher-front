import React, { Component } from 'react';
import './Questions.css';

export class Questions extends Component {
  constructor() {
    super();
    this.state = {
      userPreferences: []
    }
  }

  render() {
    return (
      <form className="user-questions">
        <h2>Select your favorite meetup topics</h2>
        <label for="traveling">
          <input type="checkbox" name="traveling" id="traveling"/> 
          Traveling
        </label>
        <label for="entrepreneur">
          <input type="checkbox" name="entrepreneur" id="entrepreneur"/> 
          Entrepreneur
        </label>
        <label for="software-devs">
          <input type="checkbox" name="software-devs" id="software-devs"/> 
          Software Developers
        </label>
        <label for="hiking">
          <input type="checkbox" name="hiking" id="hiking"/> 
          Hiking
        </label>
        <label for="photography">
          <input type="checkbox" name="photography" id="photography"/> 
          Photography
        </label>
        <label for="diningout">
          <input type="checkbox" name="diningout" id="diningout"/> 
          Dining Out
        </label>
        <label for="real-estate">
          <input type="checkbox" name="real-estate" id="real-estate"/> 
          Real Estate
        </label>
        <button className="question-btn">bingo</button>
      </form>
    )
  }
}