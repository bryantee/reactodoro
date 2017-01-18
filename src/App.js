import React, { Component } from 'react';
import Title from './components/title';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
