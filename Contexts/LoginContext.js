import { createContext } from "react";
import useLoginAPI from "../Hooks/useLoginAPI";
const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const {
    handleSubmit,
    user,
    setUser,
    logOut,
    isInvalid,
    allUsers,
    getAllUsers,
    isLoading,
    usernameRef,
    passwordRef,
  } = useLoginAPI();
  return (
    <LoginContext.Provider
      value={{
        usernameRef,
        passwordRef,
        handleSubmit,
        user,
        setUser,
        logOut,
        isInvalid,
        allUsers,
        getAllUsers,
        isLoading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };
