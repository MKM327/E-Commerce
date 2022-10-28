import Link from "next/link";
import useUserProducts from "../../Hooks/useUserProducts";
import UserProduct from "./UserProduct";

const UserProductHeader = ({ setSearchValue }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>My Products</h3>
      <input
        className="add-input"
        style={{ maxWidth: "30%" }}
        placeholder="Search Product"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <Link href={"/NewProduct"}>
        <button className="add-btn" style={{ marginTop: 0 }}>
          Add Product
        </button>
      </Link>
    </div>
  );
};
const UserProducts = () => {
  const { loading, setSearchValue, filteredUserProducts } = useUserProducts();
  return (
    <div className="user-products">
      <UserProductHeader setSearchValue={setSearchValue} />
      <div className="user-row">
        {!loading ? (
          filteredUserProducts.map((product) => {
            return <UserProduct product={product} key={product.id} />;
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};
export default UserProducts;
