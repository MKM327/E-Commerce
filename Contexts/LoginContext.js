import { createContext } from "react";
import useLoginAPI from "../Hooks/useLoginAPI";
const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const {
    setPassword,
    setUsername,
    handleSubmit,
    user,
    setUser,
    logOut,
    isInvalid,
    allUsers,
    getAllUsers,
    isLoading,
  } = useLoginAPI();
  return (
    <LoginContext.Provider
      value={{
        setPassword,
        setUsername,
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
