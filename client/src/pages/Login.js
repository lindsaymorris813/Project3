import React, { useState } from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";


const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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
      if (res.data !== "Authentication successful") {
        alert("Password or email is incorrect, try again.")
      }
    })
  };

  return (
    <>
      <Jumbotron />
      <div class="container">
        <div class="row">
          <div class="col-sm-12 mt-5">
            <a class="sign-up-link text-center header-color" href="#">
              <h2>Login Page</h2>
            </a>
          </div>
        </div>
        <div class="row shadow p-3 m-3 rounded list-border">
          <div class="col-3"></div>
          <div class="col-6">
            <form class="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control shadow p-3 m-3 bg-white rounded" id="login-email-input"
                  placeholder="Email" onChange={e => setLoginEmail(e.target.value)} ></input>
              </div>
              <div class="form-group mt-4">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control shadow p-3 m-3 bg-white rounded" id="login-password-input"
                  placeholder="Password" onChange={e => setLoginPassword(e.target.value)}></input>
              </div>
              <div class="row">
                <div class="col-12 text-center clearfix">
                  <button type="submit" class="btn btn-dark active float-right" id="login-btn" onClick={login}>Submit</button>
                </div>
              </div>

            </form>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </>
  )
}
export default Login;