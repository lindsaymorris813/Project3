import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./GlobalStyles.css";
import "./Typography.css";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Dashboard from "./pages/Dashboard.js";
import AddRecipe from "./pages/AddRecipe.js";
import SearchRecipe from "./pages/SearchRecipe.js";
import UserContext from "./components/Context/UserContext";
import Authenticated from "./components/Authenticated";
import API from "./utils/API";


const App = () => {
  const [emailID, setEmailID] = useState({
    email: "",
    onLogin: (emailID) => {
      setEmailID((emailAuth) => ({ ...emailAuth, email: emailID }));
    },
    onLogout: () => {
      setEmailID((emailAuth) => ({...emailAuth, email: ""}));
    }
  });

  // useEffect(()=>{
  //   API.userLogedIn()
  //     .then(res=>setEmailID((userLogedIn)=>({...userLogedIn,email:res.data.email})))
  //     .catch(err=>console.log(err));
  // },[emailID.email]);

  return (
    <UserContext.Provider value={emailID}>
      <div className="App" id="App">
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
