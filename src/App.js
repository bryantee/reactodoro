import React, { Component } from 'react';
import Header from './containers/header';

//theme provider material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
            {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
