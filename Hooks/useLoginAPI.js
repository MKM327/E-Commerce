import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const ApiRoot = "https://localhost:7160/api/Login/";
const useLoginAPI = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [menuState, setMenuState] = useState("Login");
  const router = useRouter();
  useEffect(() => {
    if (user !== null) router.push("/");
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  async function VerifyUser() {
    try {
      const response = await axios.post(ApiRoot + "Verify", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      response.status === 200 ? loginUser(response.data) : setUser(null);
    } catch (error) {
      console.log("invalid username or Password");
      setUser(null);
    }
  }
  function loginUser(user) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/");
  }
  async function logOut() {
    await router.push("/");
    localStorage.removeItem("user");
    setUser(null);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await VerifyUser();
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  }
  function manageMenu() {
    setMenuState(menuState === "Login" ? "Register" : "Login");
  }
  return {
    handleSubmit,
    user,
    setUser,
    logOut,
    isInvalid,
    usernameRef,
    passwordRef,
    menuState,
    setMenuState: manageMenu,
  };
};
export default useLoginAPI;
