import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./GlobalStyles.css";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Dashboard from "./pages/Dashboard.js";
import AddRecipe from "./pages/AddRecipe.js";
import SearchRecipe from "./pages/SearchRecipe.js";
import UserContext from "./components/Context/UserContext";
// import Uploader from "./pages/Uploader";
import Authenticated from "./components/Authenticated";



const App = () => {
  const [emailID, setEmailID] = useState({
    email: "",
    onLogin: (emailID) => {
      setEmailID((emailAuth) => ({ ...emailAuth, email: emailID }));
    }
  });
  
  return (
    <UserContext.Provider value={emailID}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile">
            <Authenticated>
              <Profile />
            </Authenticated>
          </Route>
          <Route exact path="/dashboard">
            <Authenticated>
              <Dashboard/>
            </Authenticated>
          </Route>
          <Route exact path="/addrecipe">
            <Authenticated>
              <AddRecipe/>
            </Authenticated>
          </Route>
          <Route exact path="/searchrecipe">
            <Authenticated>
              <SearchRecipe/>
            </Authenticated>
          </Route>
        </Router>
      </div>
    </UserContext.Provider>
  );
};


export default App;
