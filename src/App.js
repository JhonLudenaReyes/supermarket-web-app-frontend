import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Navigation from "./components/layout/Navbar/Navigation";
import Landing from "./components/layout/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
          <Navigation />
          <Route exact path="/" component={Landing} />
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
