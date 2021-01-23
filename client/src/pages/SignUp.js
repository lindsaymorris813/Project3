import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

const SignUp = () => {
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupFirst, setSignupFirst] = useState("");
    const [signupSecond, setSignupSecond] = useState("");
    const history = useHistory(); 



    const signup = (event) => {
        event.preventDefault();
        console.log("Clicked Signup");
        axios({
            method: "POST",
            data: {
                email: signupEmail,
                password: signupPassword,
                firstName: signupFirst,
                lastName: signupSecond,
            },
            url: "/api/signup",
        }).then((res) => {
            console.log(res); 
            history.push("/login")
        });
    };



    return (
        <>
            <Jumbotron />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 mt-5">
                        <a className="sign-up-link text-center header-color" href="/signup">
                            <h2>Sign Up Form</h2>
                        </a>
                    </div>
                </div>
                <div className="row shadow p-3 m-3 rounded list-border">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form className="login">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control shadow p-3 m-3 bg-white rounded" id="signup-email-input"
                                    placeholder="Email" onChange={e => setSignupEmail(e.target.value)} ></input>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control shadow p-3 m-3 bg-white rounded" id="signup-password-input"
                                    placeholder="Password" onChange={e => setSignupPassword(e.target.value)}></input>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="exampleInputFirstName1">First Name</label>
                                <input type="text" className="form-control shadow p-3 m-3 bg-white rounded" id="first-name"
                                    placeholder="First Name" onChange={e => setSignupFirst(e.target.value)}></input>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="exampleInputLastName1">Last Name</label>
                                <input type="text" className="form-control shadow p-3 m-3 bg-white rounded" id="last-name"
                                    placeholder="Last Name" onChange={e => setSignupSecond(e.target.value)} ></input>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center clearfix">
                                    <button type="submit" className="btn btn-dark active float-right" id="signup-btn" onClick={signup}>Sign Up</button>
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

export default SignUp