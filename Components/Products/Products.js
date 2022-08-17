import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductsContext";
import Product from "./Product";
const Products = () => {
  return <ProductsNoProvider />;
};
const ProductsNoProvider = () => {
  const { products, isLoading } = useContext(ProductContext);
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    products.map((product) => {
      return <Product product={product} key={product.id} />;
    })
  );
};
export default Products;
