import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductsContext";
import DashboardProduct from "./DashboardProduct";

const DashboardProducts = () => {
  const { product, isLoading } = useContext(ProductContext);
  console.log(product);
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    product.map((product) => {
      return <DashboardProduct product={product} key={product.id} />;
    })
  );
};
export default DashboardProducts;
