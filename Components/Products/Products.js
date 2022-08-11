import Product from "./Product";
const Products = ({ data }) => {
  return data.map((product) => {
    return <Product product={product} key={product.id} />;
  });
};
export default Products;
