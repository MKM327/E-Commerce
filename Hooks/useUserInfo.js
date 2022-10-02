import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";

const useUserInfo = () => {
  const { user } = useContext(LoginContext);
  const nameRef = useRef();
  const SurnameRef = useRef();
  const EmailRef = useRef();
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
  return {
    user,
    loading,
    nameRef,
    SurnameRef,
    EmailRef,
    HandleProfileUpdate,
    isUpdateFinished,
  };
};
export default useUserInfo;
