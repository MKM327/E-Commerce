import { createContext } from "react";
import useUserInfo from "../Hooks/useUserInfo";

const ProfileContext = createContext();
const ProfileProvider = ({ children }) => {
  const {
    user,
    loading,
    nameRef,
    EmailRef,
    HandleProfileUpdate,
    SurnameRef,
    isUpdateFinished,
    HandlePasswordUpdate,
    oldPasswordRef,
    newPasswordRef,
  } = useUserInfo();

  return (
    <ProfileContext.Provider
      value={{
        user,
        loading,
        nameRef,
        EmailRef,
        HandleProfileUpdate,
        SurnameRef,
        isUpdateFinished,
        HandlePasswordUpdate,
        oldPasswordRef,
        newPasswordRef,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
export { ProfileContext, ProfileProvider };