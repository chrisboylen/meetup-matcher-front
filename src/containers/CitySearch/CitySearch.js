import React, { Component } from 'react';

export class CitySearch extends Component {
  constructor () {
    super();
    this.state = {
      input: ''
    } 
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ input: value })
  }

  handleSubmit = (e) => {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          className="search-input"
          type="text"
          name="input"
          placeholder="Enter city and state"
          onChange={this.handleChange}
        />
      </form>
    )
  }
};

