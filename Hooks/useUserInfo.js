import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";

const useUserInfo = () => {
  const { user } = useContext(LoginContext);
  const nameRef = useRef();
  const SurnameRef = useRef();
  const EmailRef = useRef();
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const [loading, setLoading] = useState(true);
  const [isUpdateFinished, setIsUpdateFinished] = useState("closed");
  const [isPasswordUpdateFinished, setIsPasswordUpdateFinished] =
    useState("closed");
  useEffect(() => {
    if (user === null) return;
    setLoading(false);
  });
  async function HandleProfileUpdate(e) {
    setIsUpdateFinished("open");
    const API_Root = "https://localhost:7160/api/Login/";
    e.preventDefault();
    const name = nameRef.current.value;
    const surname = SurnameRef.current.value;
    const email = EmailRef.current.value;
    const data = {
      id: user.userProfile.id,
      name: name,
      surname: surname,
      email: email,
    };
    await axios.put(API_Root + "UpdateProfile", data);
    const localstorageUser = { ...user, ...data, id: user.id };
    localStorage.setItem("user", JSON.stringify(localstorageUser));
    setIsUpdateFinished("closed");
  }
  async function HandlePasswordUpdate(e) {
    setIsPasswordUpdateFinished("open");
    let responsevalue;
    e.preventDefault();
    const API_Root = "https://localhost:7160/api/Login/";
    const oldPassword = oldPasswordRef.current.value;
    try {
      const data = {
        ...user,
        password: oldPassword,
      };
      await axios.post(API_Root + "Verify", data);
    } catch (error) {
      responsevalue = error.response.status;
    }
    if (responsevalue === 500) return;

    const newPassword = newPasswordRef.current.value;
    const data = {
      ...user,
      password: newPassword,
    };
    await axios.put(API_Root + "UpdatePassword", data);
    setIsPasswordUpdateFinished("closed");
  }
  return {
    user,
    loading,
    nameRef,
    SurnameRef,
    EmailRef,
    HandleProfileUpdate,
    isUpdateFinished,
    HandlePasswordUpdate,
    oldPasswordRef,
    newPasswordRef,
    isPasswordUpdateFinished,
  };
};
export default useUserInfo;
