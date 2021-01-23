/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Dashboard from "./pages/Dashboard.js";
import AddRecipe from "./pages/AddRecipe.js";
import SearchRecipe from "./pages/SearchRecipe.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addrecipe" component={AddRecipe} />
          <Route exact path="/searchrecipe" component={SearchRecipe} />
        </div>
      </Router>
    );
  }
}

export default App;
