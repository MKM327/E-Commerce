import axios from "axios";
import { useEffect, useState } from "react";

const useProductAPI = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ApiRoot = "https://localhost:7160/api/ECommerce/";
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    const response = await axios.get(ApiRoot);
    var APIProducts = response.data;
    if (APIProducts.length > 0) {
      setProducts(APIProducts);
      setIsLoading(false);
      console.log("GET API RESULT 200");
    }
  }

  return { products, isLoading, getProducts };
};
export default useProductAPI;
