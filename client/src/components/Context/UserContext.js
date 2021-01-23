import React from "react";

const UserContext = React.createContext({
  email: "",
  onLogin: () => undefined
});

export default UserContext;

