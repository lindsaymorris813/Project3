import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {



    return (
        <>
            <nav className="navbar navbar-light">
                <div className="navbar-brand">Welcome!</div>
                <form class="form-inline">
                    <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Logout</button>
                </form>
            </nav>
        </>

    )



}
export default Header 
