/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"
import RecipeCard from "./components/RecipeCard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/recipecard" component={RecipeCard} />
        </div>
      </Router>
    );
  }
}

export default App;
