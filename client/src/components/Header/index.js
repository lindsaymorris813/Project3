import axios from "axios";
import React, { useContext } from "react";
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
            <nav className="navbar navbar-light">
              <div className="navbar-brand">Welcome!</div>
              <form className="form-inline">
                <button onClick={logout} className="btn my-2 my-sm-0" type="submit">Logout</button>
              </form>
            </nav>
        </>
  );
}
export default Header;