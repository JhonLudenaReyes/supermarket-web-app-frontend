import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Navigation from "./components/layout/Navbar/Navigation";
import Landing from "./components/layout/Landing";
import CategoriesAdmin from "./components/dashboard/Category/CategoriesAdmin";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Navigation />
            <Route exact path="/" component={Landing} />
            <Switch>
              <Route
                exact
                path="/dashboard/administrator/categories-administration"
                component={CategoriesAdmin}
              />
            </Switch>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
