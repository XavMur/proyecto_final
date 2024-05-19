import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(0);

  return (
    <LoginContext.Provider value={{ login, setLogin, user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
