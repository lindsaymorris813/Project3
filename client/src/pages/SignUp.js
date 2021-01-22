import React, { useState } from "react";
import axios from "axios";

function SignUp() {
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");


    const signup = (event) => {
        event.preventDefault();
        console.log("Clicked Signup");
        axios({
            method: "POST",
            data: {
                email: signupEmail,
                password: signupPassword,
            },
            url: "/api/signup",
        }).then((res) => console.log(res));
    };



    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 mt-5">
                        <a class="sign-up-link text-center header-color" href="#">
                            <h2>Sign Up Form</h2>
                        </a>
                    </div>
                </div>
                <div class="row shadow p-3 m-3 rounded list-border">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <form class="login">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control shadow p-3 m-3 bg-white rounded" id="signup-email-input"
                                    placeholder="Email" onChange={e => setSignupEmail(e.target.value)} ></input>
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control shadow p-3 m-3 bg-white rounded" id="signup-password-input"
                                    placeholder="Password" onChange={e => setSignupPassword(e.target.value)}></input>
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputFirstName1">First Name</label>
                                <input type="name" class="form-control shadow p-3 m-3 bg-white rounded" id="firstname-input"
                                    placeholder="First Name" ></input>
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputLastName1">Last Name</label>
                                <input type="name" class="form-control shadow p-3 m-3 bg-white rounded" id="lastname-input"
                                    placeholder="Last Name" ></input>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center clearfix">
                                    <button type="submit" class="btn btn-dark active float-right" id="signup-btn" onClick={signup}>Sign Up</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        </>
    );
}

export default SignUp