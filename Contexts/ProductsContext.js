import { createContext } from "react";
import useProductAPI from "../Hooks/useProductAPI";
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const { products, isLoading } = useProductAPI();
  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };
