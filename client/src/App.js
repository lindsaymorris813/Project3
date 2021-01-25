/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Dashboard from "./pages/Dashboard.js";
import AddRecipe from "./pages/AddRecipe.js";
import SearchRecipe from "./pages/SearchRecipe.js";
import UserContext from "./components/Context/UserContext";
import Uploader from "./pages/Uploader";

const App = () =>{
const [emailID, setEmailID] = useState({
  email: "",
  onLogin: (emailID) => setEmailID((emailAuth) => ({...emailAuth,email: emailID }))
});

    return (
        <UserContext.Provider value={emailID}>
        <div className="App">
      <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addrecipe" component={AddRecipe} />
          <Route exact path="/searchrecipe" component={SearchRecipe} />
          <Route exact path="/uploader" component={Uploader} />
      </Router>
        </div>
        </UserContext.Provider>
    );
  }


export default App;
