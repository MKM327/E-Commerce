import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const ApiRoot = "https://localhost:7160/api/Login/";
const useLoginAPI = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allUsers, setAllusers] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    GetAllUsers();
  }, []);
  async function GetAllUsers() {
    const response = await axios.get(ApiRoot);
    if (response.status === 200) {
      setAllusers(response.data);
      setIsLoading(false);
    }
  }
  async function VerifyUser() {
    try {
      const response = await axios.post(ApiRoot + "Verify", {
        username: username,
        password: password,
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
  function logOut() {
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
  return {
    setPassword,
    setUsername,
    handleSubmit,
    user,
    setUser,
    logOut,
    isInvalid,
    GetAllUsers,
    allUsers,
    isLoading,
  };
};
export default useLoginAPI;
