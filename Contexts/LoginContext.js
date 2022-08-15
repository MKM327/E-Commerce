import { createContext } from "react";
import useLoginAPI from "../Hooks/useLoginAPI";
const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const { setPassword, setUsername, handleSubmit, user, setUser, logOut } =
    useLoginAPI();
  return (
    <LoginContext.Provider
      value={{ setPassword, setUsername, handleSubmit, user, setUser, logOut }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };