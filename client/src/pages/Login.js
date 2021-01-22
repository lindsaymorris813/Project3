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
    }).then((res) => console.log(res)).catch(err => {
      console.log(err)
    })
    console.log("V is cool peeps")
  };
  return (
    <>
      <Jumbotron />
      <div className="Login">
        <div>
        <h1>Login</h1>
        <input className="form-control" placeholder = "email" onChange={e => setLoginEmail(e.target.value)} />
        <input className="form-control"placeholder = "password" type="password" onChange={e => setLoginPassword (e.target.value)}/>
        <button onClick={login} >Submit</button> 
        </div>
      </div>
    </>
  )
}
export default Login;