/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import AddRecipe from "./pages/AddRecipe.js";
import SearchRecipe from "./pages/SearchRecipe.js";

class App extends Component {
  render() {
    return (
      <>
      <SignUp />
      <Login />
      <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/addrecipe" component={AddRecipe} />
      <Route exact path="/searchrecipe" component={SearchRecipe} />
      </Router>
      </>
    );
  }
}

export default App;
