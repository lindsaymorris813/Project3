/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"
import RecipeCard from "./components/RecipeCard";
import UserContext from "./components/Context/UserContext";
import Uploader from "./pages/Uploader"

const App = () =>{
const [emailID, setEmailID] = useState({
  email: "",
  onLogin: (emailID) => setEmailID((emailAuth) => ({...emailAuth,email: emailID }))
});

    return (
      <Router>
        <UserContext.Provider value={emailID}>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/upload" component={Uploader} />
          <Route exact path="/recipecard" component={RecipeCard} />
        </div>
        </UserContext.Provider>
      </Router>
    );
  }


export default App;
