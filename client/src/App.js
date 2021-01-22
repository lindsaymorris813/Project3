/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"
import RecipeCard from "./components/RecipeCard";

class App extends Component {
  render() {
    return (
      <>
      <SignUp />
      <Login />
      <RecipeCard />
      </>
    );
  }
}

export default App;
