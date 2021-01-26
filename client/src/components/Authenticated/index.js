import React, { useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Authenticated = (props) => {
  const { email } = useContext(UserContext);

  const location = useLocation();
  console.log(location.pathname);
  if (email) {
    return <>{props.children}</>;
  }
  return <Redirect to="/login" />;

};

export default Authenticated;
