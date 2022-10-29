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
    menuState,
    setMenuState,
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
        menuState,
        setMenuState,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };
