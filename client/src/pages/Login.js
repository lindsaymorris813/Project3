import React, { useState, useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import UserContext from "../components/Context/UserContext";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { email, onLogin } = useContext(UserContext);
  // const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    console.log("Clicked Login");
    axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/users/login",
    }).then((res) => {
      const responseObject = JSON.parse(res.config.data);
      const emailLoggedIn = responseObject.email;
      console.log(emailLoggedIn);
      onLogin(emailLoggedIn);
    });
  };

  const renderLogin = () => {
    if (!email) {
      return (
      <>
        < Jumbotron />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 mt-5"></div>
            </div>
            <div className="row shadow p-3 m-3 rounded list-border login-box">
              <div className="col-3"></div>
              <div className="col-6">
              <a className="sign-up-link text-center header-color" href="/login">
                  <h2>Login Page</h2>
                </a>
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
                  <br />
                  <div className="row mt-3">
                    <div className="col-12">
                      <p className="text-center">Or sign up <a href="/signup">here</a></p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
      </>
      );
    }
    return <Redirect to="/dashboard" />;
  };

  return renderLogin();
  // return null;
};

export default Login;