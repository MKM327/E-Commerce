import useUserProducts from "../../Hooks/useUserProducts";
import UserProduct from "./UserProduct";

const UserProducts = () => {
  const { userProducts, loading } = useUserProducts();
  return (
    <div className="user-products">
      <h3>My Products</h3>
      <div className="user-row">
        {!loading ? (
          userProducts.map((product) => (
            <UserProduct key={product.id} product={product} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
export default UserProducts;
