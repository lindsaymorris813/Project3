import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
import "./style.css";

function Header() {
  const { onLogout } = useContext(UserContext);

  const logout = (event) => {
    event.preventDefault();
    console.log("Clicked Logout");
    axios({
      method: "GET",
      withCredentials: true,
      url: "/api/users/logout",
    }).then(() => {
      onLogout();
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand"><h2>Juicy Smoothie</h2></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/profile"
                className={
                  window.location.pathname === "/profile" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }>Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className={
                  window.location.pathname === "/dashboard" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }>Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/searchrecipe"
                className={
                  window.location.pathname === "/searchrecipe" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }>Search Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/addrecipe"
                className={
                  window.location.pathname === "/addrecipe" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }>Add Recipe
              </Link>
            </li>
          </ul>
        </div>
        <form className="form-inline">
          <button onClick={logout} className="btn my-2 my-sm-0" type="submit">Logout</button>
        </form>
      </nav>
        </>
  );
}
export default Header;