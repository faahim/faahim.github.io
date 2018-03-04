import React, { Component } from 'react';
import CardContainer from './CardContainer';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      app: <CardContainer/>
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.app}
      </div>
    );
  }
}

export default App;
