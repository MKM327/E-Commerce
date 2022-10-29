import axios from "axios";
import { useRef, useState } from "react";

const useRegister = () => {
  const regUsernameRef = useRef();
  const regPasswordRef = useRef();
  const regEmailRef = useRef();
  const regNameRef = useRef();
  const regSurnameRef = useRef();
  const [isSuccessful, setisSuccessful] = useState(false);
  async function handleRegister(e) {
    e.preventDefault();
    setisSuccessful(true);
    const ApiRoot = "https://localhost:7160/api/Login/";
    const data = {
      userProfile: {
        email: regEmailRef.current.value,
        name: regNameRef.current.value,
        surname: regSurnameRef.current.value,
      },
      Products: [],
      username: regUsernameRef.current.value,
      password: regPasswordRef.current.value,
      role: "Customer",
    };
    const response = await axios.post(ApiRoot + "Add", data);
    setisSuccessful(false);
    regEmailRef.current.value = "";
    regNameRef.current.value = "";
    regSurnameRef.current.value = "";
    regUsernameRef.current.value = "";
    regPasswordRef.current.value = "";
  }
  return {
    regUsernameRef,
    regPasswordRef,
    regEmailRef,
    regNameRef,
    regSurnameRef,
    isSuccessful,
    handleRegister,
  };
};
export default useRegister;
