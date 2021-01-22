import React, { useState } from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";

const SignUp = () => {
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupFirst, setSignupFirst] = useState("");
    const [signupSecond, setSignupSecond] = useState("");




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
        }).then((res) => console.log(res));
    };



    return (
        <>
            <Jumbotron />
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" onChange={e => setSignupEmail(e.target.value)} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                </input>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">P</span>
                </div>
                <input type="text" className="form-control" onChange={e => setSignupPassword(e.target.value)} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                </input>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">F</span>
                </div>
                <input onChange={e => setSignupFirst(e.target.value)} type="text" className="form-control" id="first-name" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1">
                </input>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">L</span>
                </div>
                <input onChange={e => setSignupSecond(e.target.value)} type="text" className="form-control" id="last-name" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1">
                </input>
            </div>
            <button type="button" className="btn btn-outline-dark" onClick={signup} >Sign Up</button>
        </>
    );
}

export default SignUp