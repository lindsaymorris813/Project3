import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Authenticated = (props) => {
  const { email } = useContext(UserContext);

  if (email) {
    return <>{props.children}</>;
  }
  return <Redirect to="/login" />;

};

export default Authenticated;
