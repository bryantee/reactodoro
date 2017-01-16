import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import store from './store';

import App from './App';
import About from './components/about';
import Pomo from './components/pomo';
import './index.css';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='about' component={About} />
      <Route path='pomo' component={Pomo} />
    </Route>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
