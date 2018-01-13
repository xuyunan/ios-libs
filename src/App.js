import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-title">iOS-Libs</h1>
        </header>
        <List/>
      </div>
    );
  }
}

export default App;
