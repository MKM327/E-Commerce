import { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductsContext";
import DashboardProduct from "./DashboardProduct";

const DashboardProducts = () => {
  const { products, isLoading } = useContext(ProductContext);

  return isLoading
    ? null
    : products.map((product) => {
        return <DashboardProduct product={product} key={product.id} />;
      });
};
export default DashboardProducts;
