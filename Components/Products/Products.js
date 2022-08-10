import Product from "./Product";
const Products = ({ data }) => {
  return data.map((product) => {
    return <Product product={product} />;
  });
};
export default Products;
