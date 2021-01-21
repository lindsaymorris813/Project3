import React, from "react";

function SignUp() {
    return (
        <>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" id="email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                </input>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">P</span>
                </div>
                <input type="text" class="form-control" id="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
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
            <button type="button" class="btn btn-outline-dark" id="signUpBtn">Sign Up</button>
        </>
    );
}

export default SignUp