import React, { Component } from 'react';
import './App.css';
import ContentRoute from '../../containers/ContentRoute/ContentRoute';

class App extends Component {
  render() {
    return (
      <main className="App">
        <ContentRoute />
      </main>
    );
  }
}

export default App;
