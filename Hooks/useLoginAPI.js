import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const ApiRoot = "https://localhost:7160/api/Login/";
const useLoginAPI = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  async function VerifyUser() {
    try {
      const response = await axios.post(ApiRoot + "Verify", {
        username: username,
        password: password,
      });
      response.status === 200 ? loginUser(response.data) : setUser(null);
      return user;
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
  function handleSubmit(e) {
    e.preventDefault();
    var loggedInUser = VerifyUser();
    console.log(loggedInUser);
    loggedInUser ? router.push("/") : null;
  }
  return { setPassword, setUsername, handleSubmit, user, setUser, logOut };
};
export default useLoginAPI;
