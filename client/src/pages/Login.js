import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../components/Context/UserContext";
import Jumbotron from "../components/Jumbotron";


const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  const currentUser = useContext(UserContext);
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    console.log('Clicked Login');
    axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/login",
    }).then((res) => {
      console.log(res);
      const emailLoggedIn = res.data.email;
      
      currentUser.onLogin(emailLoggedIn);
      setLoggedIn(emailLoggedIn);
      if (res.data === "Authentication successful"){
        history.push("/recipecard")
      } else {
        alert ("Password or email is incorrect, try again or signup.");
        history.push("/signup")
      }
    //   if (res.data !== "Authentication successful") {
    //     alert("Password or email is incorrect, try again.")
    //     history.push("/signup") //Test purposes currently
    //   }else{
    //     history.push("/dashboard"); //Test purposes currently.
    //   }
    // })
  });
}

return (
  <>
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-5">
            <a className="sign-up-link text-center header-color" href="/login">
              <h2>Login Page</h2>
            </a>
          </div>
        </div>
        <div className="row shadow p-3 m-3 rounded list-border">
          <div className="col-3"></div>
          <div className="col-6">
            <form className="login">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control shadow p-3 m-3 bg-white rounded" id="login-email-input"
                  placeholder="Email" onChange={e => setLoginEmail(e.target.value)} ></input>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control shadow p-3 m-3 bg-white rounded" id="login-password-input"
                  placeholder="Password" onChange={e => setLoginPassword(e.target.value)}></input>
              </div>
              <div className="row">
                <div className="col-12 text-center clearfix">
                  <button type="submit" className="btn btn-dark active float-right" id="login-btn" onClick={login}>Submit</button>
                </div>
              </div>

            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
      );
      module.exports={loggedIn};
    }

export default Login;