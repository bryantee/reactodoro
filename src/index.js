import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";

import store from "./store";
import App from "./App";
import About from "./components/about";
import Pomo from "./components/pomo";
import NewsArticles from "./containers/news-articles";
import "./index.css";
import { localStorageKey } from "./reducers/index";

injectTapEventPlugin();

store.subscribe(() => {
  if (window.localStorage) {
    localStorage.setItem(localStorageKey, JSON.stringify(store.getState()));
  }
});

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path="about" component={About} />
      <Route path="pomo" component={Pomo} />
      <Route path="articles" component={NewsArticles} />
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);
