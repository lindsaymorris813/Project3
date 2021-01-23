import React from "react";
import "./style.css";

function Header() {



    return (
        <>
            <nav className="navbar navbar-light" style="background-color: #145c9e;">
                <a className="navbar-brand" href="#">Welcome!</a>
                <button className="btn btn-outline-info" type="button">Logout</button>
                <button className="btn btn-light" type="button">Search Recipes</button>
            </nav>
        </>

    )



}
export default Header 
