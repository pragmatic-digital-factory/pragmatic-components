import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Draft demo in a real context v/s Storybook</h1>
        </header>
        <HomePage />
      </div>
    );
  }
}

export default App;
