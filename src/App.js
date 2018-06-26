import React, { Component } from 'react';

import Header from './containers/Header';
import Progression from './containers/Progression';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Current Training" subTitle="Cycle 2: Session 2: Sprint 3" />
        <Progression />
      </div>
    );
  }
}

export default App;
