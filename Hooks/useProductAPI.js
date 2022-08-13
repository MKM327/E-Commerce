import { useEffect, useState } from "react";

const useProductAPI = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ApiRoot = "https://localhost:7160/api/ECommerce/";
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    const data = await fetch(ApiRoot);
    const products = await data.json();
    if (products.length > 0) {
      setProducts(products);
      setIsLoading(false);
    }
  }

  return { products, isLoading };
};
export default useProductAPI;
