import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";
const API_Root = "https://localhost:7160/api/ECommerce/";
const useUserProducts = () => {
  const { user } = useContext(LoginContext);
  const [userProducts, setUserProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user === null) return;
    getUserProducts();
  }, [user]);
  async function getUserProducts() {
    setLoading(true);
    if (user === null) return;
    const response = await axios.get(API_Root + "GetUserProducts/", {
      headers: { id: user.id },
    });
    response.status === 200
      ? setUserProducts(response.data)
      : console.log("error");
    setLoading(false);
  }
  return { loading, userProducts, getUserProducts };
};
export default useUserProducts;
