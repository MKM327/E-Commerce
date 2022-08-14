import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const ApiRoot = "https://localhost:7160/api/Login/";
const useLoginAPI = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();
  async function VerifyUser() {
    try {
      const response = await axios.post(ApiRoot + "Verify", {
        username: username,
        password: password,
      });
      response.status === 200 ? setUser(response.data) : setUser(null);
    } catch (error) {
      console.log("invalid username or Password");
      setUser(null);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await VerifyUser();
    user ? router.push("/") : null;
  }
  return { setPassword, setUsername, handleSubmit, user, setUser };
};
export default useLoginAPI;
