import React from "react";
import "./style.css";

function Header() {



    return (
        <>
            <nav class="navbar navbar-light" style="background-color: #145c9e;">
                <a class="navbar-brand" href="#">Welcome!</a>
                <button class="btn btn-outline-info" type="button">Logout</button>
                <button class="btn btn-light" type="button">Search Recipes</button>
            </nav>
        </>

    )



}
export default Header 
