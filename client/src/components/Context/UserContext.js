import React from "react";

const UserContext = React.createContext({
  email: "",
  onLogin: () => undefined,
  onLogout: () => undefined
});

export default UserContext;

