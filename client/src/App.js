/* eslint-disable react/prefer-stateless-function */
import React, { Component} from "react";
import "./App.css";
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"

class App extends Component {
  render() {
    return (
      <>
      <SignUp />
      <Login />
      </>
    );
  }
}

export default App;
