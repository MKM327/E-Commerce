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
    setIsUpdateFinished("closed");
  }
  async function HandlePasswordUpdate(e) {
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
      // if (verified.data) {
      //   const newPassword = newPasswordRef.current.value;
      //   const data = {
      //     id: user.userProfile.id,
      //     password: newPassword,
      //   };
      //   await axios.put(API_Root + "UpdatePassword", data);
      // }
    } catch (error) {
      responsevalue = error.response.status;
    }
    if (responsevalue === 500) return;

    const newPassword = newPasswordRef.current.value;
    const data = {
      ...user,
      password: newPassword,
    };
    const response = await axios.put(API_Root + "UpdatePassword", data);
    console.log(response);
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
  };
};
export default useUserInfo;
