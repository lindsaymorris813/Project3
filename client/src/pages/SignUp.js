import React, { useState } from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";

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
            <Jumbotron />
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" onChange={e => setSignupEmail(e.target.value)} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                </input>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">P</span>
                </div>
                <input type="text" class="form-control" onChange={e => setSignupPassword(e.target.value)} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                </input>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">F</span>
                </div>
                <input type="text" class="form-control" id="first-name" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1">
                </input>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">L</span>
                </div>
                <input type="text" class="form-control" id="last-name" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1">
                </input>
            </div>
            <button type="button" class="btn btn-outline-dark" onClick={signup} >Sign Up</button>
        </>
    );
}

export default SignUp