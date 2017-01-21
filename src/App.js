import React, { Component } from 'react';
import Title from './components/title';

//theme provider material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Title />
            {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
